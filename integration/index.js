import startServer from 'verdaccio'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// config, cliListen, configPath, pkgVersion, pkgName, callback
const config = {
  storage: './storage',
  packages: {
    '**': {
      access: '$all',
      publish: '$all'
    }
  },
  logs: [
    { type: 'stdout', format: 'pretty', level: 'http' }
  ]
}
startServer.default(config, 6000, __dirname, '1.0.0', 'verdaccio',
  (webServer, addr, pkgName, pkgVersion) => {
    webServer.listen(addr.port || addr.path, addr.host, () => {
      console.log('verdaccio running')
    })
  })
