const { generateClash } = require('../src/converter')

test('generates valid Clash config', () => {
  const vless = {
    address: 'example.com',
    port: 443,
    uuid: '123e4567-e89b-12d3-a456-426614174000',
    network: 'ws',
    path: '/path'
  }
  
  const config = generateClash(vless)
  expect(config).toContain('type: vless')
  expect(config).toContain('server: example.com')
  expect(config).toContain('ws-path: /path')
})
