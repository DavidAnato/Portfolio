import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const index = resolve('dist/index.html')
if (existsSync(index)) {
  copyFileSync(index, resolve('dist/404.html'))
}
