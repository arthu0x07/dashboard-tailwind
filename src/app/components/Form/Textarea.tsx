import { ComponentProps } from 'react'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      id="bio"
      className="min-h-32 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
"
    ></textarea>
  )
}
