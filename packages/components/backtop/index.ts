import { App } from 'vue'
import Backtop from './src/index.vue'

import type { SFCWithInstall } from '@element-plus/utils/types'

Backtop.install = (app: App): void => {
  app.component(Backtop.name, Backtop)
}

const _Backtop: SFCWithInstall<typeof Backtop> = Backtop

export default _Backtop
export const ElBacktop = _Backtop
