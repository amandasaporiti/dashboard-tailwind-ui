import { ComponentProps, InputHTMLAttributes } from 'react'

type InputPrefix = ComponentProps<'div'>

export function InputPrefix(props: InputPrefix) {
  return <div {...props} />
}

type InputControlProps = InputHTMLAttributes<HTMLInputElement>

export function InputControl(rest: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...rest}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border  border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 hover:border-zinc-200"
      {...props}
    />
  )
}
