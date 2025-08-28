"use client";

import { useEffect, useState } from "react";
import { getBrowserSupabaseClient } from "@/app/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, UtensilsCrossed, X } from "lucide-react";
import Image from "next/image";
import PlateMenuHeader from "@/app/components/menu/PlateMenuHeader";
import PlateMenuFooter from "@/app/components/menu/PlateMenuFooter";

interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine_type: string | null;
  main_image_url: string | null;
  price_range: number | null;
  opening_time: string | null;
  closing_time: string | null;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
  display_order: number;
}

type TagLike = string | string[] | null;

interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  dietary_tags: TagLike; // <- allow array or string
  allergens: TagLike; // <- allow array or string
  category_id: string | null;
}

export default function RestaurantMenu({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [allergenFilters, setAllergenFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [restaurantId, setRestaurantId] = useState<string>("");

  const supabase = getBrowserSupabaseClient();

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setRestaurantId(resolvedParams.id);
    };
    getParams();
  }, [params]);

  useEffect(() => {
    if (restaurantId) {
      fetchRestaurantData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurantId]);

  useEffect(() => {
    filterMenuItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, dietaryFilters, allergenFilters, menuItems]);

  const fetchRestaurantData = async () => {
    try {
      setLoading(true);

      const { data: restaurantData, error: restaurantError } = await supabase
        .from("restaurants")
        .select("*")
        .eq("id", restaurantId)
        .single();

      if (restaurantError) throw restaurantError;
      if (!restaurantData) throw new Error("Restaurant not found");
      setRestaurant(restaurantData as Restaurant);

      const { data: categoriesData, error: categoriesError } = await supabase
        .from("menu_categories")
        .select("*")
        .eq("restaurant_id", restaurantId)
        .eq("is_active", true)
        .order("display_order");

      if (categoriesError) throw categoriesError;
      setCategories((categoriesData as MenuCategory[]) || []);

      const { data: menuData, error: menuError } = await supabase
        .from("menu_items")
        .select("*")
        .eq("restaurant_id", restaurantId)
        .eq("is_available", true)
        .order("display_order");

      if (menuError) throw menuError;

      // Ensure shape & null safety
      const cleaned = (menuData || []).map((row: Record<string, unknown>) => ({
        id: String(row.id),
        name: String(row.name ?? ""),
        description: row.description ?? null,
        price: typeof row.price === "number" ? row.price : null,
        dietary_tags: row.dietary_tags ?? null, // can be jsonb/text[]/string
        allergens: row.allergens ?? null, // can be jsonb/text[]/string
        category_id: row.category_id ?? null,
      })) as MenuItem[];

      setMenuItems(cleaned);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };

  // --- Robust parsing that accepts array | stringified JSON | "a,b,c" | "a; b; c" | null
  const parseList = (value: TagLike): string[] => {
    if (value == null) return [];
    try {
      // Already an array (jsonb/text[])
      if (Array.isArray(value)) {
        return value
          .map((v) => String(v).trim().toLowerCase())
          .filter((v) => v.length > 0);
      }

      // Try to parse stringified JSON
      if (typeof value === "string") {
        const trimmed = value.trim();
        if (!trimmed) return [];
        if (trimmed.toLowerCase() === "null") return [];

        if (
          (trimmed.startsWith("[") && trimmed.endsWith("]")) ||
          trimmed.startsWith("{")
        ) {
          const maybe = JSON.parse(trimmed);
          if (Array.isArray(maybe)) {
            return maybe
              .map((v: unknown) => String(v).trim().toLowerCase())
              .filter((v: string) => v.length > 0);
          }
          // if object, ignore
          return [];
        }

        // Fallback: split on comma or semicolon
        return trimmed
          .split(/[;,]/)
          .map((s) => s.trim().toLowerCase())
          .filter((s) => s.length > 0);
      }

      // Unknown type
      return [];
    } catch {
      // On parse error, fallback to splitting if it's a string
      if (typeof value === "string") {
        return value
          .split(/[;,]/)
          .map((s) => s.trim().toLowerCase())
          .filter((s) => s.length > 0);
      }
      return [];
    }
  };

  const parseDietaryTags = (tags: TagLike) => parseList(tags);
  const parseAllergens = (allergens: TagLike) => parseList(allergens);

  const filterMenuItems = () => {
    let filtered = [...menuItems];

    // Search (case-insensitive)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.description ?? "").toLowerCase().includes(q)
      );
    }

    // Dietary filters: keep items that include ALL selected tags
    if (dietaryFilters.length > 0) {
      filtered = filtered.filter((item) => {
        const itemTags = parseDietaryTags(item.dietary_tags);
        return dietaryFilters.every((f) => itemTags.includes(f));
      });
    }

    // Allergen filters: EXCLUDE any item that contains any selected allergen
    if (allergenFilters.length > 0) {
      filtered = filtered.filter((item) => {
        const itemAllergens = parseAllergens(item.allergens);
        return !allergenFilters.some((a) => itemAllergens.includes(a));
      });
    }

    setFilteredItems(filtered);
  };

  // Unique sets from the ACTUAL items (so only what's present appears)
  const getAllDietaryTags = () => {
    const set = new Set<string>();
    menuItems.forEach((item) => {
      parseDietaryTags(item.dietary_tags).forEach((t) => set.add(t));
    });
    return Array.from(set).sort();
  };

  const getAllAllergens = () => {
    const set = new Set<string>();
    menuItems.forEach((item) => {
      parseAllergens(item.allergens).forEach((a) => set.add(a));
    });
    return Array.from(set).sort();
  };

  const toggleDietaryFilter = (tag: string) => {
    setDietaryFilters((prev) =>
      prev.includes(tag) ? prev.filter((f) => f !== tag) : [...prev, tag]
    );
  };

  const toggleAllergenFilter = (allergen: string) => {
    setAllergenFilters((prev) =>
      prev.includes(allergen)
        ? prev.filter((f) => f !== allergen)
        : [...prev, allergen]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setDietaryFilters([]);
    setAllergenFilters([]);
  };

  const getPriceRangeText = (priceRange: number | null | undefined) => {
    const n = Math.max(1, Math.min(5, Number(priceRange) || 1));
    return "$".repeat(n);
  };

  // icon/color maps assume lowercase keys
  const getDietaryIcon = (tag: string) => {
    const t = tag.toLowerCase();
    const icons: Record<string, string> = {
      vegetarian: "🥬",
      vegan: "🌱",
      "gluten-free": "🌾",
      halal: "☪️",
      kosher: "✡️",
      "dairy-free": "🥛",
      "nut-free": "🥜",
      keto: "🥑",
      "low-carb": "🥒",
      spicy: "🌶️",
      organic: "🌿",
      local: "🏠",
      seasonal: "🍂",
      "whole-grain": "🌾",
      "low-sodium": "🧂",
      "sugar-free": "🍯",
      "high-protein": "💪",
      "low-fat": "💧",
    };
    return icons[t] || "🍽️";
  };

  const getDietaryColor = (tag: string) => {
    const t = tag.toLowerCase();
    const colors: Record<string, string> = {
      vegetarian: "bg-green-100 text-green-800 border-green-200",
      vegan: "bg-emerald-100 text-emerald-800 border-emerald-200",
      "gluten-free": "bg-amber-100 text-amber-800 border-amber-200",
      halal: "bg-blue-100 text-blue-800 border-blue-200",
      kosher: "bg-purple-100 text-purple-800 border-purple-200",
      "dairy-free": "bg-cyan-100 text-cyan-800 border-cyan-200",
      "nut-free": "bg-orange-100 text-orange-800 border-orange-200",
      keto: "bg-lime-100 text-lime-800 border-lime-200",
      "low-carb": "bg-teal-100 text-teal-800 border-teal-200",
      spicy: "bg-red-100 text-red-800 border-red-200",
      organic: "bg-emerald-100 text-emerald-800 border-emerald-200",
      local: "bg-indigo-100 text-indigo-800 border-indigo-200",
      seasonal: "bg-orange-100 text-orange-800 border-orange-200",
      "whole-grain": "bg-amber-100 text-amber-800 border-amber-200",
      "low-sodium": "bg-blue-100 text-blue-800 border-blue-200",
      "sugar-free": "bg-pink-100 text-pink-800 border-pink-200",
      "high-protein": "bg-purple-100 text-purple-800 border-purple-200",
      "low-fat": "bg-sky-100 text-sky-800 border-sky-200",
    };
    return colors[t] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getAllergenIcon = (allergen: string) => {
    const a = allergen.toLowerCase();
    const icons: Record<string, string> = {
      milk: "🥛",
      dairy: "🧀",
      eggs: "🥚",
      wheat: "🌾",
      gluten: "🌾",
      nuts: "🥜",
      "tree-nuts": "🌰",
      peanuts: "🥜",
      soy: "🫘",
      fish: "🐟",
      shellfish: "🦐",
      sesame: "🌰",
      mustard: "🌭",
      celery: "🥬",
      lupin: "🫘",
      sulfites: "🧪",
      molluscs: "🦪",
    };
    return icons[a] || "⚠️";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 font-medium">
            Loading delicious menu...
          </p>
        </motion.div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Restaurant not found
          </h1>
          <p className="text-slate-600">
            The restaurant you&apos;re looking for doesn&apos;t exist.
          </p>
        </motion.div>
      </div>
    );
  }

  const totalActiveFilters = dietaryFilters.length + allergenFilters.length;
  const availableDietaryTags = getAllDietaryTags();
  const availableAllergens = getAllAllergens();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffece2" }}>
      {/* Plate Branded Header */}
      <PlateMenuHeader />

      {/* Hero Section */}
      <motion.div
        className="relative h-80 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
        <Image
          src={restaurant.main_image_url || "/restaurant.png"}
          alt={restaurant.name || "Restaurant"}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            className="text-center text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-white/90 bg-clip-text">
              {restaurant.name || "Restaurant"}
            </h1>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              {restaurant.description || "Delicious food awaits you!"}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <UtensilsCrossed className="w-4 h-4" />
                <span>{restaurant.cuisine_type || "Cuisine"}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-lg">
                  {getPriceRangeText(restaurant.price_range)}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span>
                  {restaurant.opening_time || "9:00 AM"} -{" "}
                  {restaurant.closing_time || "10:00 PM"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Menu Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Search and Filters */}
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for dishes, ingredients, or flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg placeholder:text-slate-400"
            />
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            {/* Dietary Preferences */}
            {availableDietaryTags.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2 text-lg">
                  🌿 Choose Your Dietary Preferences
                </h4>
                <p className="text-slate-600 mb-3 text-sm">
                  Select all that apply to see items that match your preferences
                </p>
                <div className="flex flex-wrap gap-3">
                  {availableDietaryTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleDietaryFilter(tag)}
                      className={`px-4 py-3 rounded-full text-sm font-medium border-2 transition-all transform hover:scale-105 ${
                        dietaryFilters.includes(tag)
                          ? getDietaryColor(tag) +
                            " shadow-lg scale-105 border-2"
                          : "bg-white text-slate-600 hover:bg-slate-50 border-slate-300 hover:border-slate-400"
                      }`}
                    >
                      <span className="text-lg mr-2">
                        {getDietaryIcon(tag)}
                      </span>
                      <span className="capitalize">
                        {tag.replace("-", " ")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Allergen Exclusions */}
            {availableAllergens.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2 text-lg">
                  ⚠️ Choose Allergens to Exclude
                </h4>
                <p className="text-slate-600 mb-3 text-sm">
                  Select allergens to hide items that contain them
                </p>
                <div className="flex flex-wrap gap-3">
                  {availableAllergens.map((allergen) => (
                    <button
                      key={allergen}
                      onClick={() => toggleAllergenFilter(allergen)}
                      className={`px-4 py-3 rounded-full text-sm font-medium border-2 transition-all transform hover:scale-105 ${
                        allergenFilters.includes(allergen)
                          ? "bg-red-100 text-red-800 border-red-400 shadow-lg scale-105 border-2"
                          : "bg-white text-slate-600 hover:bg-slate-50 border-slate-300 hover:border-red-300"
                      }`}
                    >
                      <span className="text-lg mr-2">
                        {getAllergenIcon(allergen)}
                      </span>
                      <span className="capitalize">
                        {allergen.replace("-", " ")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No data message */}
            {availableDietaryTags.length === 0 &&
              availableAllergens.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">🍽️</div>
                  <p className="text-slate-600 text-lg">
                    No dietary or allergen information available for this menu.
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    Use the search bar above to find specific dishes.
                  </p>
                </div>
              )}

            {/* Clear Filters */}
            {totalActiveFilters > 0 && (
              <div className="text-center pt-4 border-t border-slate-200">
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors font-medium flex items-center gap-2 mx-auto"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters ({totalActiveFilters})
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Category Navigation */}
        {categories && categories.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
              Jump to Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .sort((a, b) => a.display_order - b.display_order)
                .map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      const element = document.getElementById(
                        category.name.toLowerCase().replace(/\s+/g, "-")
                      );
                      if (element) {
                        const navbarHeight = 80; // Approximate navbar height
                        const elementPosition =
                          element.offsetTop - navbarHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="px-4 py-2 bg-white text-slate-700 rounded-full border border-slate-200 hover:text-white hover:border-transparent transition-all duration-200 shadow-sm font-medium hover:bg-[#792339] cursor-pointer"
                  >
                    {category.name}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-slate-600">
            <span className="font-semibold text-primary">
              {filteredItems?.length || 0}
            </span>{" "}
            delicious items found
            {totalActiveFilters > 0 && (
              <span className="text-slate-400">
                {" "}
                (filtered from {menuItems?.length || 0} total)
              </span>
            )}
          </p>
        </div>

        {/* Menu Items Grouped by Category */}
        <AnimatePresence mode="wait">
          {!filteredItems || filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-8xl mb-6"
              >
                🔍
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                No dishes found
              </h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Try adjusting your filters or search terms to discover more
                delicious options
              </p>
              {totalActiveFilters > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </motion.div>
          ) : (
            <div className="space-y-12">
              {(() => {
                const byId: Record<string, MenuCategory> = {};
                categories.forEach((c) => (byId[c.id] = c));
                // Build grouped structure by category (keep uncategorized at end)
                const groups: Array<{
                  key: string;
                  category: MenuCategory;
                  items: MenuItem[];
                }> = [];

                const grouped: Record<string, MenuItem[]> = {};
                filteredItems.forEach((item) => {
                  const key =
                    item.category_id && byId[item.category_id]
                      ? item.category_id
                      : "__uncat__";
                  if (!grouped[key]) grouped[key] = [];
                  grouped[key].push(item);
                });

                Object.entries(grouped).forEach(([key, items]) => {
                  if (key === "__uncat__") return; // push later
                  groups.push({ key, category: byId[key], items });
                });

                // Sort by display_order
                groups.sort(
                  (a, b) => a.category.display_order - b.category.display_order
                );

                // Handle uncategorized last
                if (grouped["__uncat__"]) {
                  groups.push({
                    key: "__uncat__",
                    category: {
                      id: "uncategorized",
                      name: "Other Items",
                      description: "Additional menu items",
                      display_order: 999,
                    },
                    items: grouped["__uncat__"],
                  });
                }

                return groups.map(({ key, category, items }) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    {/* Category Header */}
                    <div
                      id={category.name.toLowerCase().replace(/\s+/g, "-")}
                      className="text-white px-8 py-6"
                      style={{ backgroundColor: "#792339" }}
                    >
                      <h2 className="text-3xl font-bold mb-2">
                        {category.name}
                      </h2>
                      {category.description && (
                        <p className="text-white/90 text-lg">
                          {category.description}
                        </p>
                      )}
                      <div className="text-sm text-white/70 mt-2">
                        {items.length} {items.length === 1 ? "item" : "items"}
                      </div>
                    </div>

                    {/* Items */}
                    <div className="p-6 space-y-4">
                      {items.map((item, index) => {
                        const dietaryTags = parseDietaryTags(item.dietary_tags);
                        const allergens = parseAllergens(item.allergens);

                        return (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-start justify-start p-4 bg-slate-100 rounded-xl hover:bg-slate-100 transition-colors group border border-transparent hover:border-primary/90 relative"
                          >
                            <div className="flex-1 ">
                              <div className="flex items-center justify-between ">
                                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-primary transition-colors">
                                  {item.name}
                                </h3>
                                {typeof item.price === "number" && (
                                  <div className="flex items-center gap-1 bg-gradient-to-br via-transparent to-slate-300 text-primary px-4 py-2 rounded-full font-bold text-xl">
                                    <span className="text-sm">$</span>
                                    {item.price.toFixed(2)}
                                  </div>
                                )}
                              </div>

                              {item.description && (
                                <p className="text-slate-600  leading-relaxed">
                                  {item.description}
                                </p>
                              )}

                              <div className="space-y-3">
                                {/* Dietary Tags */}
                                {dietaryTags.length > 0 && (
                                  <div>
                                    <p className="text-sm font-semibold text-slate-700 mb-2">
                                      🌿 Dietary Options:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {dietaryTags.map((tag) => (
                                        <span
                                          key={tag}
                                          className={`px-3 py-2 text-sm font-medium rounded-full border-2 transition-transform hover:scale-105 ${getDietaryColor(
                                            tag
                                          )}`}
                                        >
                                          <span className="mr-1">
                                            {getDietaryIcon(tag)}
                                          </span>
                                          <span className="capitalize">
                                            {tag.replace("-", " ")}
                                          </span>
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Allergen Warning */}
                                {allergens.length > 0 && (
                                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                                    <div className="flex items-start gap-3">
                                      <span className="text-red-600 text-lg">
                                        ⚠️
                                      </span>
                                      <div>
                                        <p className="text-sm font-semibold text-red-800 mb-2">
                                          Contains Allergens:
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                          {allergens.map((allergen) => (
                                            <span
                                              key={allergen}
                                              className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full font-medium border border-red-300 capitalize"
                                            >
                                              <span className="mr-1">
                                                {getAllergenIcon(allergen)}
                                              </span>
                                              {allergen.replace("-", " ")}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ));
              })()}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Plate Branded Footer */}
      <PlateMenuFooter />
    </div>
  );
}
