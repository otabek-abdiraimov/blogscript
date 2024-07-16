import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
	return (
		<section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
			<div className='mb-8 flex flex-wrap justify-between'>
				<div className='mb-4 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
					<h1 className='mb-4 text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl'>
						Shaxsiy rivojlanishga oid maqolalar
					</h1>
					<p className='pb-4 max-w-md leading-relaxed text-gray-500 xl:text-lg'>
						Turli xil mavzularda qiziqarli maqolalar o&apos;qib boring.
					</p>
					<div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
						<div className='flex h-12 w-32 divide-x overflow-hidden rounded-lg border'>
							<Link
								href='/blogs'
								className='flex w-full items-center justify-center transition duration-300 dark:hover:bg-gray-100 dark:hover:text-black dark:active:bg-gray-200 hover:bg-primary hover:text-white active:bg-primary/80'
							>
								Maqolalar
							</Link>
						</div>
					</div>
				</div>
				<div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
					<div className='bg-gray-300 dark:bg-slate-700 relative left-10 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-20 md:top-16 lg:ml-0'>
						<Image
							src='/heroImg1.jpg'
							alt='hero img'
							priority
							className='h-full w-full object-cover object-center'
							width={500}
							height={500}
						/>
					</div>
					<div className='bg-gray-300 dark:bg-slate-700 overflow-hidden rounded-lg shadow-lg'>
						<Image
							src='/heroImg2.jpg'
							alt='hero img'
							priority
							className='h-full w-full object-cover object-center'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
