import type { Ref, ComputedRef } from 'vue'

export interface RegisterMenuItem {
  index: string
  indexPath: ComputedRef<string[]>
  active: ComputedRef<boolean>
}

export interface RootMenuData {
  activeIndex: string
  openedMenus: unknown[]
  items: any
  submenus: any
  isMenuPopup: boolean
}

export interface MenuProvider {
  openedMenus: Ref<RootMenuData['openedMenus']>
  items: Ref<RootMenuData['items']>
  submenus: Ref<RootMenuData['submenus']>
  activeIndex: Ref<RootMenuData['activeIndex']>
  hoverBackground: Ref<string>
  isMenuPopup: Ref<RootMenuData['isMenuPopup']>

  props: Readonly<Partial<RootMenuProps>>
  methods: {
    addMenuItem: (item: RegisterMenuItem) => void
    removeMenuItem: (item: RegisterMenuItem) => void
    addSubMenu: (item: RegisterMenuItem) => void
    removeSubMenu: (item: RegisterMenuItem) => void
    openMenu: (index: string, indexPath: Ref<string[]>) => void
    closeMenu: (index: string) => void
    handleMenuItemClick: (item: {
      index: string
      indexPath: ComputedRef<string[]>
      route?: any
    }) => void
    handleSubMenuClick: (submenu: {
      index: string
      indexPath: ComputedRef<string[]>
    }) => void
  }
}

export interface SubMenuProvider {
  addSubMenu: (item: RegisterMenuItem) => void
  removeSubMenu: (item: RegisterMenuItem) => void
  handleMouseleave?: (deepDispatch: boolean) => void
}

export interface RootMenuProps {
  mode: string
  defaultActive: string
  defaultOpeneds: unknown[]
  uniqueOpened: boolean
  router: boolean
  menuTrigger: string
  collapse: boolean
  backgroundColor: string
  textColor: string
  activeTextColor: string
  collapseTransition: boolean
}
