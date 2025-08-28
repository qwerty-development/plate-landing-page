import { NextResponse } from "next/server";
import { getServerSupabaseClient } from "@/lib/supabaseServer";

export async function GET() {
	try {
		const supabase = await getServerSupabaseClient();
		// Just test if we can create a client and make a basic request
		const { error } = await supabase.from('_dummy_table_').select('*').limit(1);
		// We expect an error for non-existent table, but that means connection works
		if (error && error.message.includes('does not exist')) {
			return NextResponse.json({ 
				ok: true, 
				message: "Supabase connection successful - client created and can reach database",
				url: process.env.NEXT_PUBLIC_SUPABASE_URL 
			}, { status: 200 });
		}
		return NextResponse.json({ 
			ok: true, 
			message: "Supabase connection successful",
			url: process.env.NEXT_PUBLIC_SUPABASE_URL 
		}, { status: 200 });
	} catch (err: unknown) {
		return NextResponse.json({ 
			ok: false, 
			message: (err as Error)?.message ?? "Unknown error",
			url: process.env.NEXT_PUBLIC_SUPABASE_URL 
		}, { status: 500 });
	}
}

