export async function onRequest(context) {
  const { request, env } = context;
  const cors = { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" };
  
  try {
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    const url = new URL(request.url);
    
    // POST /api/order
    if (request.method === "POST") {
      const body = await request.json();
      const id = "ACNH-" + Date.now().toString(36).toUpperCase().slice(-6) + Math.random().toString(36).substring(2, 4).toUpperCase();
      const raw = "%ordercat " + body.items.join(" ") + (body.villager ? " villager:" + body.villager : "");
      if (env && env.KV) await env.KV.put(id, JSON.stringify({ id, raw }), { expirationTtl: 86400 });
      return new Response(JSON.stringify({ success: true, orderId: id, raw }), { headers: cors });
    }

    // GET /api/order/:id
    const pathParts = url.pathname.split("/");
    const orderId = pathParts[pathParts.length - 1];
    if (request.method === "GET" && orderId && orderId.startsWith("ACNH-")) {
      if (!env || !env.KV) return new Response(JSON.stringify({ success: false, error: "KV错误" }), { headers: cors });
      const raw = await env.KV.get(orderId);
      if (!raw) return new Response(JSON.stringify({ success: false, error: "不存在" }), { headers: cors });
      return new Response(JSON.stringify({ success: true, order: JSON.parse(raw) }), { headers: cors });
    }

    return new Response("OK", { headers: cors });
  } catch (e) {
    return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500, headers: cors });
  }
}