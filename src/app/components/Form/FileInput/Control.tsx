import { ComponentProps } from 'react'

export interface Control extends ComponentProps<'input'> {}

export function Control(props: Control) {
  return <input type="file" className="sr-only" id="photo" {...props} />
}
