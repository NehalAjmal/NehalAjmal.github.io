import {  
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ReactElement,
  useRef,
  useCallback,
  RefObject,
  memo
} from 'react'
import dynamic from 'next/dynamic'

const TextArea = dynamic(() => import('./TextArea'))
const TextInput = dynamic(() => import('./Input'))
const IconLabel = dynamic(() => import('./IconLabel'))

type InputPropsType = InputHTMLAttributes<HTMLInputElement>;
type TextareaPropsType = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface BaseProps {
  placeholder: string;
  error?: string;
  icon: ReactElement;
  area?: boolean;
}

type InputProps = BaseProps & (InputPropsType | TextareaPropsType);

function Input({
  icon,
  placeholder,
  error,
  id,
  area = false,
  ...props
}: InputProps) {

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  const handleInputClick = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div
      id={id}
      onClick={handleInputClick}
      className={`px3 m:py-2.5 sm:3.5 flex w-full max-w-[400px] cursor-text justify-start
      gap-2.5 overflow-hidden rounded-lg border border-200 bg-50 px-3 py-2 shadow-little transition-colors ease-in-out focus-within:border-400 md:px-4 md:py-3
      ${error ? 'border-l-error' : 'border-200'} ${area ? 'items-start' : 'items-center'}`}
    >
      <IconLabel area={area}>{icon}</IconLabel>
      
      {area ? (
        <TextArea ref={inputRef as RefObject<HTMLTextAreaElement>} placeholder={placeholder} {...props} />
      ) : (
        <TextInput ref={inputRef as RefObject<HTMLInputElement>} placeholder={placeholder} {...props} />
      )}
    </div>
  )
}

export default memo(Input)
