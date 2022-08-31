# Inktober Bot

Sends a message to a Discord webhook's channel broadcasting the topic for the day.

## Quick Start

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/doingandlearning/inktober-discord-call)

### Environment Variables

The function requires the following envrionment variables:

```
BOT_NAME="Inky"
AVATAR_URL="https://link.to.avatar.jpg"
DISCORD_WEB_HOOK="https://discordapp.com/api/webhooks/..."
```

The values should be updated to your desired settings. The Discord Webhook URL should come from your own Integration settings.

## Getting Started

### Installation
Install the dependencies with:
```
npm install
```

### Environment File

Create an environment file `.env` at the root of the project:
```
BOT_NAME="Inky"
AVATAR_URL="https://link.to.avatar.jpg"
DISCORD_WEB_HOOK="https://discordapp.com/api/webhooks/..."
```

The values should represent what you want your webhook to post as.

The `DISCORD_WEB_HOOK` value can be found when creating a new Webhook inside of Discord by going to your Server Settings, Integrations, and then using the Webhook integration.

### Local Development
To start your local development, run:
```
npm run serve
```

By default, this will start a new server at http://localhost:9000.

To trigger the webhook, simply send a request to http://localhost:9000/discord


