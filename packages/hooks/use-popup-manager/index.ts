import { ref, getCurrentInstance } from 'vue'
import { useGlobalConfig } from '../use-global-config'

let zIndex = 0
export const usePopupManager = () => {
  let globalInitialZIndex = 2000 // TODO: move to @element-plus/constants

  const setGlobalInitialZIndex = (value: number) =>
    (globalInitialZIndex = value)

  const getInitialZIndex = () => {
    if (!getCurrentInstance()) return ref(globalInitialZIndex)
    return useGlobalConfig('zIndex', globalInitialZIndex)
  }

  const currentZIndex = () => getInitialZIndex().value + zIndex

  const nextZIndex = () => {
    zIndex++
    return currentZIndex()
  }

  return {
    globalInitialZIndex,
    setGlobalInitialZIndex,
    getInitialZIndex,
    currentZIndex,
    nextZIndex,
  }
}
