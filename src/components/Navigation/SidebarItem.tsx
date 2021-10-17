import { FC } from 'react'
import { Shadow } from '../Wrapper/Shadow'

interface SidebarItemProps {
  active?: boolean
  openAble: boolean
  navName: string
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  return (
    <li className={`${props.openAble ? 'xn-openable' : ''} ${props.active ? 'active' : ''}`}>
      <a href="#"><span className="fa fa-dashboard"></span> <span className="xn-text">{props.navName}</span></a>
      <Shadow hide={!props.openAble}>
        {props.children}
      </Shadow>
    </li>
  )
}
