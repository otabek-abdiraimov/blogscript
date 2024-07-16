'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Textarea } from '../ui/textarea'
import { formSchema } from '@/lib/validations'

function ContactForm() {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			message: '',
			name: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true)
		const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAMBOT_API
		const telegramChatId = process.env.NEXT_PUBLIC_CHAT_ID

		const promise = fetch(
			`https://api.telegram.org/bot${telegramBotId}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'cache-control': 'no-cache',
				},
				body: JSON.stringify({
					chat_id: telegramChatId,
					text: `Name: ${values.name}
Email: ${values.email},
Message: ${values.message}
			`,
				}),
			}
		)
			.then(() => form.reset())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Yuborilmoqda...',
			success: 'Muvaffaqiyatli yuborildi!',
			error: 'Xatolik yuz berdi!',
		})
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										disabled={isLoading}
										className='resize-none h-32'
										placeholder='Taklif yoki shikoyatingizni yozing...'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder='Emailingiz'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder='Ismingiz'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button disabled={isLoading} className='w-fit' size={'lg'}>
						<span>Send</span>
						<Send className='w-4 h-4' />
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default ContactForm
