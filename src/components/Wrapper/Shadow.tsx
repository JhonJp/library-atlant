import { FC } from 'react'

interface ShadowProps {
  hide?: boolean
}

export const Shadow: FC<ShadowProps> = (props) => {
  return (
    <>
      {props.hide ? <></> : props.children}
    </>
  )
}