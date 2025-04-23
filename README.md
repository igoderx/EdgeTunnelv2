# EdgeTunnel 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange)](https://workers.cloudflare.com)

> VLESS configuration to subscription converter running on Cloudflare Workers

EdgeTunnel is a serverless solution that transforms VLESS configurations into standardized subscription formats compatible with Clash, Sing-box, and other proxy tools.

## ✨ Features

- **Instant Conversion**: Convert raw VLESS JSON to subscription links in one click
- **Multi-Client Support**: Generates configurations for:
  - Clash (YAML)
  - Sing-box (JSON) 
  - Shadowrocket (conf)
- **Zero Configuration**: Runs entirely on Cloudflare Workers - no server setup needed
- **Privacy First**: All processing happens client-side; no data logging

## 🚀 Quick Start

1. Deploy to Cloudflare Workers:
   ```bash
   git clone https://github.com/yourusername/EdgeTunnel.git
   cd EdgeTunnel
   npm install
   wrangler deploy
