import { withInstall } from '@element-plus/utils-new'

import ConfigProvider from './src/config-provider'

export const ElConfigProvider = withInstall(ConfigProvider)
export default ElConfigProvider

export * from './src/config-provider'
