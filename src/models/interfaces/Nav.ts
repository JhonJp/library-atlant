export interface ISideNavProps {
  hasLogo?: boolean
  hasHeaderName?: boolean
  hasNavigationLabel?: boolean
  companyName: string
  companyTagline?: string
  companyLogoURL?: string
}

export interface ISidebarItemProps {
  active?: boolean
  openAble: boolean
  navName: string
  iconClassName: string
}

export interface ITopNavProps {
  hasSearch?: boolean
  hasMgs?: boolean
  messageCount?: string | number
  messageURL?: string
  signOut: () => void
  onSearch?: (e) => void
}
