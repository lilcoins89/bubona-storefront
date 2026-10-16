import { NextResponse } from "next/server";
import { supabaseRest } from "@/lib/supabase/rest";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    await supabaseRest("newsletter_subscribers", {
      method: "POST",
      body: JSON.stringify({ email, source: "website" }),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    if (message.includes("409") || message.includes("23505")) return NextResponse.json({ ok: true });
    return NextResponse.json({ error: "Could not join the list right now." }, { status: 500 });
  }
}
