import ModeToggle from '@/components/shared/ModeToggle'
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='w-full relative flex items-center justify-between py-5'>
			<Link href={'/'} className='font-bold text-3xl'>
				Blog<span className='text-slate-500'>Script</span>
			</Link>
			<ModeToggle />
		</nav>
	)
}
