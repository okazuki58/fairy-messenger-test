/**
 * Facebook Messenger Webhook API Route
 * 
 * GET: Webhook verification endpoint for Facebook
 * POST: Receives webhook events from Facebook Messenger
 */

/**
 * Handles webhook verification from Facebook
 * Facebook sends a GET request with hub.mode, hub.verify_token, and hub.challenge
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  // あなたの verify token と合わせる
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "myverifytoken123";

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  } else {
    return new Response("Forbidden", { status: 403 });
  }
}

/**
 * Handles incoming webhook events from Facebook Messenger
 * Logs the event and returns 200 status to acknowledge receipt
 */
export async function POST(request) {
  const body = await request.json();

  console.log("🔔 Webhook Event Received:");
  console.log(JSON.stringify(body, null, 2));

  // Facebook には 200 を返す必要がある
  return new Response("EVENT_RECEIVED", { status: 200 });
}

