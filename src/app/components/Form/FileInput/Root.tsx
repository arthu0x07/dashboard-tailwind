'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export interface Root extends ComponentProps<'div'> {}

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: Root) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  console.log(files)

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props}></div>
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
