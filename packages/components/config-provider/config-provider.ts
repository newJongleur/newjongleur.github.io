import { defineComponent } from 'vue'
import { useLocaleProps, useLocale, useGlobalConfig } from '@element-plus/hooks'
import { buildProp, definePropType, mutable } from '@element-plus/utils/props'
import type { ButtonConfigContext } from '@element-plus/components/button'

export const configProviderProps = {
  ...useLocaleProps,
  // Add more configs
  button: buildProp({
    type: definePropType<ButtonConfigContext>(Object),
    default: () => {
      return mutable({
        autoInsertSpace: true,
      } as const)
    },
  }),
}

export const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,
  setup(_, { slots }) {
    useLocale()
    useGlobalConfig(_)
    return () => slots.default?.()
  },
})
