import { NextResponse } from "next/server";
import { getServerSupabaseClient } from "@/lib/supabaseServer";

export async function GET() {
  try {
    const supabase = await getServerSupabaseClient();
    
    // Test basic connection
    console.log('Testing Supabase connection...');
    
    // Check if we can query the restaurants table
    const { data: restaurants, error: restaurantsError } = await supabase
      .from('restaurants')
      .select('id, name, cuisine_type')
      .limit(5);
    
    if (restaurantsError) {
      console.error('Restaurants query error:', restaurantsError);
      return NextResponse.json({ 
        ok: false, 
        error: 'Failed to query restaurants table',
        details: restaurantsError 
      }, { status: 500 });
    }
    
    // Check if we can query the menu_categories table
    const { data: categories, error: categoriesError } = await supabase
      .from('menu_categories')
      .select('id, name, restaurant_id')
      .limit(5);
    
    if (categoriesError) {
      console.error('Categories query error:', categoriesError);
      return NextResponse.json({ 
        ok: false, 
        error: 'Failed to query menu_categories table',
        details: categoriesError 
      }, { status: 500 });
    }
    
    // Check if we can query the menu_items table
    const { data: menuItems, error: menuItemsError } = await supabase
      .from('menu_items')
      .select('id, name, price, restaurant_id')
      .limit(5);
    
    if (menuItemsError) {
      console.error('Menu items query error:', menuItemsError);
      return NextResponse.json({ 
        ok: false, 
        error: 'Failed to query menu_items table',
        details: menuItemsError 
      }, { status: 500 });
    }
    
    return NextResponse.json({
      ok: true,
      message: 'Supabase connection and tables working correctly',
      data: {
        restaurants_count: restaurants?.length || 0,
        categories_count: categories?.length || 0,
        menu_items_count: menuItems?.length || 0,
        sample_restaurants: restaurants || [],
        sample_categories: categories || [],
        sample_menu_items: menuItems || []
      }
    });
    
  } catch (err: unknown) {
    console.error('Test API error:', err);
    return NextResponse.json({ 
      ok: false, 
      error: 'Test failed',
      message: (err as Error)?.message || 'Unknown error'
    }, { status: 500 });
  }
}
