'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'

import { User, AtSign, Pencil, ArrowRight } from 'lucide-react'

import { schema, FormData } from '@schemas/talk'
import { Notification } from '@typess/types'

const Input = dynamic(() => import('@components/ui/Input'), { ssr: false })
const Button = dynamic(() => import('@components/ui/Button'), { ssr: false })

interface FormProps {
  setNotification: (notification: Notification) => void;
  notification: Notification;
  closeNotification: () => void;
  ref: React.RefObject<HTMLDivElement>
}

function FormComponent({ setNotification, notification, closeNotification, ref }: FormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  })

  const [ lastInteractionTime, setLastInteractionTime ] = useState<number>(Date.now())
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false)

  const timeoutDuration = 10000

  const handleUserInteraction = useCallback(() => {
    setLastInteractionTime(Date.now())
  }, [])

  const submitTalk = useCallback(
    async (data: FormData) => {
      setIsSubmitting(true)

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          throw new Error('Failed to send message.')
        }
        setNotification({
          active: true,
          message: 'Message sent successfully!',
          sended: true,
          error: false,
        })
        reset()
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.'
        setNotification({
          active: true,
          message: errorMessage,
          sended: false,
          error: true,
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [ reset, setNotification ]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteractionTime > timeoutDuration) {
        reset()
        setLastInteractionTime(Date.now())
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [ lastInteractionTime, reset, timeoutDuration ])

  useEffect(() => {
    if (notification.active) {
      const timer = setTimeout(() => {
        closeNotification()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [ notification.active, closeNotification ])

  return (
    <div
      ref={ref}
      className="my-10 max-w-[700px] rounded-lg bg-gradient-to-r from-50 from-30% to-transparent px-7 py-3 shadow-shadow sm:px-8 sm:py-3.5 md:px-9 md:py-4 lg:px-10 lg:py-5"
    >
      <form
        onSubmit={handleSubmit(submitTalk)}
        className="flex w-full max-w-[400px] flex-col items-end gap-4 py-8 sm:py-9 md:py-10"
        onMouseMove={handleUserInteraction}
        onKeyDown={handleUserInteraction}
        onFocus={handleUserInteraction}
      >
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              id="input-name"
              icon={<User />}
              placeholder="Your Name"
              error={errors.name?.message}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              id="input-email"
              icon={<AtSign />}
              placeholder="Your Email"
              error={errors.email?.message}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              type="email"
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              id="input-message"
              icon={<Pencil />}
              placeholder="Message here..."
              error={errors.message?.message}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              area
            />
          )}
        />
        <Button
          id="talk-button"
          icon={<ArrowRight />}
          label="Send"
          type="submit"
          disabled={notification.sended}
          isLoading={isSubmitting}
        />
      </form>
    </div>
  )
}

export default memo(FormComponent)
