import { provide, inject } from 'vue'
import { configProviderInjectKey } from '@element-plus/tokens'
import type { ConfigProvdierContext } from '@element-plus/tokens'

const defaultConfig: ConfigProvdierContext = {
  button: {
    autoInsertSpace: true,
  },
}

export const useGlobalConfig = (props: ConfigProvdierContext) => {
  provide(configProviderInjectKey, props)
}

export const useGlobalConfigInject = () => {
  return inject(configProviderInjectKey, defaultConfig)
}
