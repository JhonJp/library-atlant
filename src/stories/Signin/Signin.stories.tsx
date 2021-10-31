import { Meta, Story } from '@storybook/react'
import { Grid } from '@material-ui/core'
import { SignInForm } from '../../components/Signin/Signin'

export default {
  title: 'Forms/Sign In',
  component: SignInForm
} as Meta

const TextInput: Story<any> = (args) => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <SignInForm {...args} />
      </Grid>
    </Grid>
  )
}

export const Args = TextInput.bind({})

Args.args = {
  appName: 'Atlant',
  logoUrl: 'https://firebasestorage.googleapis.com/v0/b/orderingsystem-f3275.appspot.com/o/imgs%2Fbasic-lr.png?alt=media&token=23744fb5-3910-4211-af22-1f70524073ec',
  forgotPasswordLink: '#forgotpassword',
  registerLink: '#register',
  aboutLink: '#about',
  privacyLink: '#privacy',
  contactLink: '#contact',
  socialComponent: <div className="form-group center-block">
    <div className="col-md-6 col-md-offset-3">
      <button className="btn btn-info btn-block btn-google"><span className="fa fa-google-plus"></span> Google</button>
    </div>
  </div>,
  isLightMode: false,
  hasSocials: true,
  onChangeEmail: (v: any) => { console.log('onchange email', v) },
  onChangePassword: (v: any) => { console.log('onchange password', v) },
  signIn: () => { console.log('sign btn clicked') }
}