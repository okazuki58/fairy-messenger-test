# fairy-messenger-test

Facebook Messenger Webhook Test Application

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.example .env.local
```

3. Edit `.env.local` and set your verify token:
```
VERIFY_TOKEN=your_verify_token_here
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## API Endpoints

- `GET /api/webhook` - Facebook webhook verification endpoint
- `POST /api/webhook` - Receives webhook events from Facebook Messenger

## Facebook Messenger Setup

1. Go to your Facebook App Dashboard
2. Add Messenger product
3. Set webhook URL to: `https://your-domain.com/api/webhook`
4. Set the verify token to match your `VERIFY_TOKEN` in `.env.local`
5. Subscribe to the webhook events you need
