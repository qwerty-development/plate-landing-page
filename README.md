This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Supabase Setup

Add the following environment variables in a new file named `.env.local` at the project root:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
# Optional for server-side admin tasks; do not expose to client
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Where to find these:
- Project URL and keys: Project Settings → API.

Never commit `.env.local`.

## Restaurant Menu System

The project includes a complete restaurant menu system with the following features:

### Database Tables Required

You need these three tables in your Supabase database:

1. **`restaurants`** - Restaurant information
2. **`menu_categories`** - Menu categories (appetizers, main course, etc.)
3. **`menu_items`** - Individual menu items

### Features

- 🍽️ **Interactive Menu Display** - Beautiful card-based layout with images
- 🔍 **Advanced Search** - Search by item name or description
- 🏷️ **Category Filtering** - Filter by menu categories
- 🌱 **Dietary Filters** - Filter by vegetarian, vegan, gluten-free, etc.
- 💰 **Price Filtering** - Filter by price ranges
- ❤️ **Favorites System** - Save favorite menu items
- 📱 **Responsive Design** - Works on all device sizes
- ✨ **Smooth Animations** - Framer Motion powered interactions

### How to Use

**Direct Access Only**: The menu system is designed for direct access via restaurant IDs, not public browsing.

- **Menu Pages**: Navigate to `/menu/[restaurant-id]` for specific restaurant menus
- **Example**: `http://localhost:3000/menu/59a2b33b-1c61-4c17-ab0a-bb1086aefc6b`
- **Filtering**: Use search bar, category tabs, and filter dropdowns
- **No Public Index**: There is no public page listing all restaurants

### Database Schema Example

```sql
-- Example restaurant
INSERT INTO restaurants (id, name, description, cuisine_type, price_range) 
VALUES ('59a2b33b-1c61-4c17-ab0a-bb1086aefc6b', 'La Trattoria', 'Authentic Italian', 'Italian', 2);

-- Example menu category
INSERT INTO menu_categories (id, restaurant_id, name, display_order) 
VALUES ('cat-1', '59a2b33b-1c61-4c17-ab0a-bb1086aefc6b', 'Appetizers', 1);

-- Example menu item
INSERT INTO menu_items (id, restaurant_id, category_id, name, price, dietary_tags) 
VALUES ('item-1', '59a2b33b-1c61-4c17-ab0a-bb1086aefc6b', 'cat-1', 'Bruschetta', 12.99, ARRAY['vegetarian']);
```

### Testing

1. Start the dev server: `npm run dev`
2. Access a specific restaurant menu: `/menu/[restaurant-id]`
3. Test the filtering and search functionality
4. The system will automatically fetch data for that specific restaurant

The menu system is fully functional and ready to connect to your Supabase database!
