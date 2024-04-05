import { ComponentProps } from 'react'

export interface Root extends ComponentProps<'div'> {}

export function Root(props: Root) {
  return <div {...props}></div>
}
