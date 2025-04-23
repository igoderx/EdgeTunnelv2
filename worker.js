import { generateClash, generateSingbox } from './converter.js'
import html from '../public/index.html'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    
    // API Endpoint
    if (url.pathname === '/convert' && request.method === 'POST') {
      try {
        const { vless } = await request.json()
        const format = url.searchParams.get('format') || 'clash'
        
        let config
        if (format === 'clash') {
          config = generateClash(vless)
          return new Response(config, { 
            headers: { 'Content-Type': 'text/yaml' } 
          })
        } else {
          config = generateSingbox(vless)
          return new Response(config, {
            headers: { 'Content-Type': 'application/json' }
          })
        }
      } catch (err) {
        return new Response(err.message, { status: 400 })
      }
    }

    // Web Interface
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    })
  }
}
