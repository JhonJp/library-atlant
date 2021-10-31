import { FC } from 'react'
import { Shadow } from '../Wrapper/Shadow'
import { ISideNavProps } from '../../models/interfaces/Nav'

export const Sidebar: FC<ISideNavProps> = (props) => {
  const { hasLogo, companyLogoURL, companyName, hasHeaderName, companyTagline } = props

  return (
    <div className="page-sidebar page-sidebar-fixed scroll">
      <ul className="x-navigation x-navigation-hover">
        <Shadow hide={!hasHeaderName}>
          <li className="xn-logo">
            <a href="/">{companyName}</a>
            <a href="/" className="x-navigation-control"></a>
          </li>
        </Shadow>
        <Shadow hide={!hasLogo}>
          <li className="xn-profile">
            <a href="#" className="profile-mini">
              <img src={companyLogoURL} alt={companyName} />
            </a>
            <div className="profile">
              <div className="profile-image">
                <img src={companyLogoURL} alt={companyName} />
              </div>
              <div className="profile-data">
                <div className="profile-data-title">{companyTagline}</div>
              </div>
            </div>
          </li>
        </Shadow>
        <Shadow hide={!props.hasNavigationLabel} >
          <li className="xn-title">Navigation</li>
        </Shadow>
        {props.children}
      </ul>
    </div>
  )
}
