const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export async function supabaseRest<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!supabaseUrl || !supabaseKey) throw new Error("Supabase is not configured");
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...init.headers,
    },
  });
  if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
  return response.json() as Promise<T>;
}

export type StoreProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price_cents: number;
  image_url: string | null;
  colors: string[];
  sizes: string[];
  featured: boolean;
};

export async function getProducts() {
  return supabaseRest<StoreProduct[]>("products?active=eq.true&order=created_at.asc");
}

export async function getProduct(slug: string) {
  const products = await supabaseRest<StoreProduct[]>(`products?slug=eq.${encodeURIComponent(slug)}&active=eq.true&limit=1`);
  return products[0] ?? null;
}
