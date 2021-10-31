export interface ISignIn {
  appName: string
  logoUrl: string
  forgotPasswordLink: string
  registerLink: string
  aboutLink?: string
  privacyLink?: string
  contactLink?: string
  socialComponent?: any
  isLightMode?: boolean
  hasSocials?: boolean
  onChangeEmail: (v: any) => void
  onChangePassword: (v: any) => void
  signIn: () => void
}