'use client';

import { useState } from 'react';
import { getBrowserSupabaseClient } from '@/app/supabaseClient';

export default function SetupDatabase() {
  const [status, setStatus] = useState<string>('');
  const [logs, setLogs] = useState<string[]>([]);
  const [restaurantId, setRestaurantId] = useState<string>('59a2b33b-1c61-4c17-ab0a-bb1086aefc6b');

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testConnection = async () => {
    try {
      setStatus('Testing connection...');
      addLog('Testing Supabase connection...');
      
      const supabase = getBrowserSupabaseClient();
      
      // Test basic connection
      const { error } = await supabase.from('restaurants').select('count').limit(1);
      
      if (error) {
        addLog(`❌ Connection failed: ${(error as Error)?.message || 'Unknown error'}`);
        setStatus('Connection failed');
        return;
      }
      
      addLog('✅ Supabase connection successful!');
      setStatus('Connection successful');
      
    } catch (error: unknown) {
      addLog(`❌ Error: ${(error as Error)?.message || 'Unknown error'}`);
      setStatus('Connection failed');
    }
  };

  const createTables = async () => {
    try {
      setStatus('Creating tables...');
      addLog('Creating database tables...');
      
      const supabase = getBrowserSupabaseClient();
      
      // Create restaurants table
      addLog('Creating restaurants table...');
      const { error: restaurantsError } = await supabase.rpc('exec_sql', {
        sql: `
          CREATE TABLE IF NOT EXISTS restaurants (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name TEXT NOT NULL,
            description TEXT,
            cuisine_type TEXT NOT NULL,
            main_image_url TEXT,
            average_rating NUMERIC DEFAULT 0,
            total_reviews INTEGER DEFAULT 0,
            price_range INTEGER CHECK (price_range >= 1 AND price_range <= 4),
            opening_time TIME,
            closing_time TIME,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `
      });
      
      if (restaurantsError) {
        addLog(`⚠️ Restaurants table: ${restaurantsError.message}`);
      } else {
        addLog('✅ Restaurants table created/verified');
      }
      
      // Create menu_categories table
      addLog('Creating menu_categories table...');
      const { error: categoriesError } = await supabase.rpc('exec_sql', {
        sql: `
          CREATE TABLE IF NOT EXISTS menu_categories (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            restaurant_id UUID REFERENCES restaurants(id),
            name TEXT NOT NULL,
            description TEXT,
            display_order INTEGER DEFAULT 0,
            is_active BOOLEAN DEFAULT true,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `
      });
      
      if (categoriesError) {
        addLog(`⚠️ Categories table: ${categoriesError.message}`);
      } else {
        addLog('✅ Categories table created/verified');
      }
      
      // Create menu_items table
      addLog('Creating menu_items table...');
      const { error: itemsError } = await supabase.rpc('exec_sql', {
        sql: `
          CREATE TABLE IF NOT EXISTS menu_items (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            restaurant_id UUID REFERENCES restaurants(id),
            category_id UUID REFERENCES menu_categories(id),
            name TEXT NOT NULL,
            description TEXT,
            price NUMERIC NOT NULL,
            image_url TEXT,
            dietary_tags TEXT[] DEFAULT '{}',
            allergens TEXT[] DEFAULT '{}',
            calories INTEGER,
            preparation_time INTEGER,
            is_available BOOLEAN DEFAULT true,
            is_featured BOOLEAN DEFAULT false,
            display_order INTEGER DEFAULT 0,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `
      });
      
      if (itemsError) {
        addLog(`⚠️ Menu items table: ${itemsError.message}`);
      } else {
        addLog('✅ Menu items table created/verified');
      }
      
      setStatus('Tables created/verified');
      addLog('🎉 Database setup complete!');
      
    } catch (error: unknown) {
      addLog(`❌ Error creating tables: ${(error as Error)?.message || 'Unknown error'}`);
      setStatus('Failed to create tables');
    }
  };

  const insertSampleData = async () => {
    try {
      setStatus('Inserting sample data...');
      addLog('Inserting sample restaurant data...');
      
      const supabase = getBrowserSupabaseClient();
      
      // Insert sample restaurant
      const { error: restaurantError } = await supabase
        .from('restaurants')
        .insert({
          id: restaurantId,
          name: 'La Trattoria',
          description: 'Authentic Italian cuisine in a cozy atmosphere',
          cuisine_type: 'Italian',
          price_range: 2,
          opening_time: '11:00',
          closing_time: '22:00'
        })
        .select()
        .single();
      
      if (restaurantError) {
        addLog(`⚠️ Restaurant insert: ${restaurantError.message}`);
      } else {
        addLog('✅ Sample restaurant created');
      }
      
      // Insert sample categories
      const { data: categories, error: categoriesError } = await supabase
        .from('menu_categories')
        .insert([
          {
            restaurant_id: restaurantId,
            name: 'Appetizers',
            display_order: 1
          },
          {
            restaurant_id: restaurantId,
            name: 'Main Course',
            display_order: 2
          },
          {
            restaurant_id: restaurantId,
            name: 'Desserts',
            display_order: 3
          }
        ])
        .select();
      
      if (categoriesError) {
        addLog(`⚠️ Categories insert: ${categoriesError.message}`);
      } else {
        addLog('✅ Sample categories created');
      }
      
      // Insert sample menu items
      const { error: menuItemsError } = await supabase
        .from('menu_items')
        .insert([
          {
            restaurant_id: restaurantId,
            category_id: categories?.[0]?.id,
            name: 'Bruschetta',
            description: 'Toasted bread topped with tomatoes, garlic, and olive oil',
            price: 12.99,
            dietary_tags: ['vegetarian'],
            calories: 180,
            preparation_time: 10
          },
          {
            restaurant_id: restaurantId,
            category_id: categories?.[1]?.id,
            name: 'Spaghetti Carbonara',
            description: 'Classic pasta with eggs, cheese, pancetta, and black pepper',
            price: 24.99,
            calories: 650,
            preparation_time: 20
          }
        ])
        .select();
      
      if (menuItemsError) {
        addLog(`⚠️ Menu items insert: ${menuItemsError.message}`);
      } else {
        addLog('✅ Sample menu items created');
      }
      
      setStatus('Sample data inserted');
      addLog('🎉 Sample data complete! You can now test the menu.');
      
    } catch (error: unknown) {
      addLog(`❌ Error inserting data: ${(error as Error)?.message || 'Unknown error'}`);
      setStatus('Failed to insert sample data');
    }
  };

  const testMenu = () => {
    window.open(`/menu/${restaurantId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Database Setup</h1>
          <p className="text-xl text-gray-600">
            Set up your Supabase database for the restaurant menu system
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Test Connection</h2>
          <button
            onClick={testConnection}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Test Supabase Connection
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Status: <span className="font-medium">{status}</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Create Tables</h2>
          <p className="text-gray-600 mb-4">
            This will create the required tables: restaurants, menu_categories, and menu_items
          </p>
          <button
            onClick={createTables}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Create Database Tables
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Insert Sample Data</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Restaurant ID (you can change this):
            </label>
            <input
              type="text"
              value={restaurantId}
              onChange={(e) => setRestaurantId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={insertSampleData}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Insert Sample Data
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Test Menu</h2>
          <p className="text-gray-600 mb-4">
            Once you have data, test the menu system
          </p>
          <button
            onClick={testMenu}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Test Menu Page
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Setup Logs</h3>
          <div className="bg-white rounded-lg p-4 h-64 overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-gray-500">No logs yet. Start with step 1.</p>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="text-sm font-mono text-gray-700 mb-1">
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
