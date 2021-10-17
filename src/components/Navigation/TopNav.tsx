import { FC } from 'react'
import { Shadow } from '../Wrapper/Shadow'

interface TopNavProps {
  hasSearch?: boolean
  hasMgs?: boolean
  messageCount?: string | number
  messageURL?: string
  signOut: () => void
  onSearch?: (e) => void
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { hasSearch, hasMgs, messageCount, messageURL, signOut, onSearch } = props
  return (
    <ul className="x-navigation x-navigation-horizontal x-navigation-panel">
      <li className="xn-icon-button">
        <a href="#" className="x-navigation-minimize"><span className="fa fa-dedent"></span></a>
      </li>
      <Shadow hide={!hasSearch}>
        <li className="xn-search">
          <form role="form">
            <input type="text" name="search" placeholder="Search..." onChange={onSearch ? onSearch : undefined} />
          </form>
        </li>
      </Shadow>

      <li className="xn-icon-button pull-right last">
        <a href="#"><span className="fa fa-power-off" onClick={signOut}></span></a>
      </li>

      <Shadow hide={!hasMgs}>
        <li className="xn-icon-button pull-right">
          <a href={messageURL}><span className="fa fa-comments"></span></a>
          <div className="informer informer-danger">{messageCount}</div>
        </li>
      </Shadow>
    </ul>
  )
}