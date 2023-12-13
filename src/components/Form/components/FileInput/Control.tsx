'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...rest }: ControlProps) {
  const { id, onSelectedFiles } = useFileInput()

  function handleSelectedFiles(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onSelectedFiles(files, multiple)
  }
  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      {...rest}
      onChange={handleSelectedFiles}
      multiple={multiple}
    />
  )
}
