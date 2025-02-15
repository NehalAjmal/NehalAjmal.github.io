import { memo, RefObject } from 'react'

interface TextInputProps {
  ref: RefObject<HTMLInputElement>;
  placeholder: string;
}

function TextInput ({ ref, placeholder, ...props }: TextInputProps) {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      className="w-full border-none bg-transparent text-xs leading-5 text-900 outline-none
      placeholder:select-none placeholder:text-600 sm:text-sm"
      {...props}
    />
  )
}

export default memo(TextInput)