import { FC } from 'react'
import { ISignIn } from '../../models/interfaces/Signin'
import { InputField } from '../Inputs/Input'
import { Shadow } from '../Wrapper/Shadow'
import moment from 'moment'

export const SignInForm: FC<ISignIn> = (props) => {
  return (
    <div className={`login-container ${props.isLightMode ? 'lightmode' : ''}`}>
      <div className="login-box animated fadeInDown">
        <div className="login-logo" style={{ background: `url(${props.logoUrl}) top center no-repeat` }}></div>
        <div className="login-body">
          <div className="login-title"><strong>Log In</strong></div>
          <div className="form-horizontal" >
            <InputField type='text' placeholder='Email address' onChange={props.onChangeEmail} />

            <InputField type='password' placeholder='Enter password' onChange={props.onChangePassword} />

            <div className="form-group">
              <div className="col-md-6">
                <a href={props.forgotPasswordLink} className="btn btn-link btn-block">Forgot your password?</a>
              </div>
              <div className="col-md-6">
                <button className="btn btn-info btn-block" onClick={props.signIn}>Log In</button>
              </div>
            </div>
            <Shadow hide={!props.hasSocials}>
              <div className="login-or">OR</div>
              {props.socialComponent}
            </Shadow>
            <div className="login-subtitle">
              Don't have an account yet? <a href={props.registerLink}>Create an account</a>
            </div>
          </div>
        </div>
        <div className="login-footer">
          <div className="pull-left">
            &copy; {moment().format('yyyy')} {props.appName}
          </div>
          <div className="pull-right">
            <Shadow hide={!props.aboutLink}> <a href={props.aboutLink}>About</a> | </Shadow>
            <Shadow hide={!props.privacyLink}> <a href={props.privacyLink}>Privacy</a> |</Shadow>
            <Shadow hide={!props.contactLink}> <a href={props.contactLink}>Contact Us</a> </Shadow>
          </div>
        </div>
      </div>

    </div>
  )
}