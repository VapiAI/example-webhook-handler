# Vapi Integration Examples

A simple example API project demonstrating how to integrate with Vapi.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:
Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
npm run dev
```

> **Tip:** Use `npm start` instead of `npm run dev` to avoid auto-reloading and URL changes during development.

The API will be available at `http://localhost:4000`

## Ngrok Integration

This project includes optional ngrok integration for exposing your local server to the internet. To enable ngrok:

1. Sign up for a free ngrok account at <https://ngrok.com>
2. Get your authtoken from <https://dashboard.ngrok.com/get-started/your-authtoken>
3. Update your `.env` file:
   - Set `ENABLE_NGROK=true`
   - Add your `NGROK_AUTH_TOKEN` from step 2
4. Start the server with `npm run dev`
5. The server will print the Server Messages URL in the console (e.g., `Server Messages URL: https://xxxx-xxxx-xxxx.ngrok.app/messages`)
6. Copy this URL and update the Server URL in your Vapi dashboard:
   - Go to the Vapi dashboard at <https://dashboard.vapi.ai/assistants>
   - Navigate to the Advanced Tab in the Messaging Section
   - Paste the Server Messages URL from the console

> **Note:** If you're using a free ngrok account, the URL will change each time you restart the server or modify your code (which triggers a server reload). You'll need to update the Server URL in your Vapi dashboard with the new URL each time. To avoid this during development, use `npm start` instead of `npm run dev`.

## Available Routes

- `POST /messages` - Receive server messages from Vapi
