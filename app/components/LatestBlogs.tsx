import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { blogCard } from '@/lib/interface'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 30

async function getData() {
	const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDesc,
      "currentSlug": slug.current,
      titleImage,
      _createdAt
  }`

	const data: blogCard[] = await client.fetch(query)

	return data
}

function formatDate(dateString: string | number | Date) {
	const date = new Date(dateString)
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return date.toLocaleDateString('uz-UZ', options)
}

export default async function LatestBlogs() {
	const data = await getData()

	return (
		<div className='container mx-auto py-8'>
			<h1 className='my-4 text-center text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl'>
				Oxirgi maqolalar
			</h1>
			<div className='flex flex-col gap-y-4'>
				{data.slice(0, 2).map((c, idx) => (
					<Card key={idx} className='flex flex-col md:flex-row w-full p-3'>
						<Image
							src={urlFor(c.titleImage).url()}
							alt='image'
							width={300}
							height={500}
							className='object-cover rounded-md'
						/>
						<CardContent className='!p-0 md:!p-6 mt-4 md:mt-0'>
							<h1 className='!text-start font-bold text-xl'>{c.title}</h1>
							<p className='text-sm line-clamp-3 mt-2 text-muted-foreground'>
								{c.smallDesc}
							</p>
							<p className='mt-1'>{formatDate(c._createdAt)}</p>
							<Button asChild className='w-full md:w-fit mt-7'>
								<Link href={`/blog/${c.currentSlug}`}>Read more</Link>
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
