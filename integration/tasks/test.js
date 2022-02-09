'use strict'

import util from 'util'
import childProcess from 'child_process'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const exec = util.promisify(childProcess.exec)

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgCoreWorkingDirectory = join(__dirname, '..', '..', 'packages', 'core')

// package
const packageCmd = await exec('npm run package', { cwd: pkgCoreWorkingDirectory })

// pack
const packCmd = await exec('npm pack', { cwd: pkgCoreWorkingDirectory })
const pkgName = packCmd.stdout.trim()
const pkgPackPath = join(pkgCoreWorkingDirectory, pkgName)

// install
await exec(`npm i ${pkgPackPath} --prefix webpack@5`, { cwd: join(__dirname, '..') })


