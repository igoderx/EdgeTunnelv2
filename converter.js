// Clash configuration generator
export function generateClash(vlessConfig) {
  return `proxies:
  - name: "EdgeTunnel-${vlessConfig.remarks || Date.now()}"
    type: vless
    server: ${vlessConfig.address}
    port: ${vlessConfig.port}
    uuid: ${vlessConfig.uuid}
    tls: ${vlessConfig.tls}
    network: ${vlessConfig.network}
    ${vlessConfig.network === 'ws' ? `ws-path: ${vlessConfig.path}` : ''}`
}

// Singbox configuration generator
export function generateSingbox(vlessConfig) {
  return JSON.stringify({
    outbounds: [{
      type: "vless",
      tag: "EdgeTunnel",
      server: vlessConfig.address,
      server_port: vlessConfig.port,
      uuid: vlessConfig.uuid,
      transport: {
        type: vlessConfig.network,
        path: vlessConfig.path || ""
      }
    }]
  }, null, 2)
}
