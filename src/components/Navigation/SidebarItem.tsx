import { FC } from 'react'
import { Shadow } from '../Wrapper/Shadow'
import { ISidebarItemProps } from '../../models/interfaces/Nav'

export const SidebarItem: FC<ISidebarItemProps> = (props) => {
  return (
    <li className={`${props.openAble ? 'xn-openable' : ''} ${props.active ? 'active' : ''}`}>
      <a href="#">
        <span className={`fa ${props.iconClassName}`}></span>
        <span className="xn-text">{props.navName}</span>
      </a>
      <Shadow hide={!props.openAble}>
        {props.children}
      </Shadow>
    </li>
  )
}
