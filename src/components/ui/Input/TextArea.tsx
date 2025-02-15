import { useCallback, RefObject, useEffect, memo } from 'react'

interface TextAreaProps {
  ref: RefObject<HTMLTextAreaElement>;
  placeholder: string;
}

function TextArea({ ref, placeholder, ...props }: TextAreaProps) {

  const handleTextareaResize = useCallback(() => {
    const textarea = ref.current as HTMLTextAreaElement
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [ ref ])

  useEffect(() => {
    handleTextareaResize()
  }, [ handleTextareaResize ])

  return (
    <textarea
      ref={ref}
      placeholder={placeholder}
      className="max-h-64 w-full resize-none overflow-y-auto border-none bg-transparent text-xs leading-7 text-900 outline-none
      placeholder:select-none placeholder:text-600 sm:text-sm"
      rows={4}
      onInput={handleTextareaResize}
      {...props}
    />
  )
}

export default memo(TextArea)