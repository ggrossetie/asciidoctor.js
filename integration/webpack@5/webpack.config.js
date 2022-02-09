import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const nodeConfig = {
  entry: './index.js',
  mode: 'none',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'asciidoctor-integration-webpack5.node.js',
  },
}

const umdWebConfig = {
  entry: './index.js',
  mode: 'none',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'asciidoctor-integration-webpack5.umd.js',
    library: {
      name: 'AsciidoctorIntegration',
      type: 'umd',
    }
  },
}

const esmWebConfig = {
  entry: './index.js',
  mode: 'none',
  target: 'web',
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'asciidoctor-integration-webpack5.esm.js',
    library: {
      type: 'module',
    }
  }
}

export default [nodeConfig, umdWebConfig, esmWebConfig]
