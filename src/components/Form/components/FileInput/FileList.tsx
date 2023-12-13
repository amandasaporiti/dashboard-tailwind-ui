'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export function FileList() {
  const { files, onSelectedFiles } = useFileInput()
  const [parent] = useAutoAnimate()

  function handleRemoveFile(name: string) {
    const filteredFiles = files.filter((file) => file.name !== name)
    onSelectedFiles(filteredFiles)
  }

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => (
        <FileItem
          name={file.name}
          size={file.size}
          key={file.name}
          onRemoveFile={handleRemoveFile}
          state="error"
        />
      ))}
    </div>
  )
}
