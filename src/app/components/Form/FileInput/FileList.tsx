'use client'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileInput } from './Root'
import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInput()

  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file, index) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state={index % 2 === 1 ? 'progress' : 'complete'}
          />
        )
      })}
    </div>
  )
}
