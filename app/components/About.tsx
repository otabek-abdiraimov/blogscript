import Image from 'next/image'

async function About() {
	return (
		<div className='container mx-auto max-w-6xl mx-auto'>
			<h1 className='font-bold text-center sm:text-4xl md:mb-8 md:text-5xl mt-10'>
				Bilimxona
			</h1>

			<div className='grid grid-cols-4 gap-4 min-h-96 mt-6'>
				<div className='col-span-2 max-md:col-span-4 relative h-80'>
					<Image
						src={'/about1.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover grayscale hover:grayscale-0 cursor-pointer transition-all duration-500'
					/>
				</div>
				<div className='h-80 self-end relative max-md:col-span-2 max-md:h-72'>
					<Image
						src={'/about2.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover grayscale hover:grayscale-0 cursor-pointer transition-all duration-500'
					/>
				</div>
				<div className='relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72'>
					<Image
						src={'/about3.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover grayscale hover:grayscale-0 cursor-pointer transition-all duration-500'
					/>
				</div>
			</div>

			<div className='max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground'>
				<p className='text-lg'>
					Agarda siz shaxsiy rivojlanishga oid maqolalar qidirayotgan
					bo&apos;lsangiz, <span className='font-bold'>Bilimxona</span> aynan
					siz uchun.
				</p>
			</div>

			<h1 className='font-bold text-center sm:text-4xl md:mb-8 md:text-5xl mt-10'>
				Maqolalar yozuvchisi
			</h1>

			<div className='flex flex-col gap-y-4 items-center text-center justify-around max-md:flex-col max-md:space-y-4 max-md:items-center'>
				<Image
					src={'/author.jpg'}
					alt='author'
					width={250}
					height={500}
					className='rounded-xl grayscale hover:grayscale-0 cursor-pointer transition-all duration-500'
				/>
				<h3 className='font-bold text-xl'>Otabek Abdiraimov</h3>
			</div>
		</div>
	)
}

export default About
