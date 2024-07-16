import ContactForm from '@/components/forms/contact'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

function Contacting() {
	return (
		<div className='max-w-6xl mx-auto'>
			<h1 className='mt-10 text-center text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl'>
				Aloqaga chiqish
			</h1>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-2 mt-6'>
				<div className='flex items-center text-center md:items-start md:text-start flex-col'>
					<p className='mt-2 text-muted-foreground'>
						Agarda maqolalar bo&apos;yicha tavsiya yoki shikoyatlaringiz
						bo&apos;lsa bizga aloqaga chiqing.
					</p>

					<div className='mt-5 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>otabek.bro2009@gmail.com</p>
					</div>
					<div className='mt-5 flex items-center gap-3'>
						<Phone className='w-4 h-4' />
						<p className='text-sm'>+998 90 733 97 76</p>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	)
}

export default Contacting
