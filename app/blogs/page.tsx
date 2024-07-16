import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { blogCard } from '@/lib/interface'
import { client, urlFor } from '@/lib/sanity'
import { Redis } from '@upstash/redis'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 30 // revalidate at most 30 seconds

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

const redis = Redis.fromEnv()

export default async function Home() {
	const data = await getData()

	const views = await redis.mget<number[]>(['pageviews', 'posts'].join(':'))

	return (
		<div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
				{data.map((c, idx) => (
					<Card className='p-3 flex flex-col' key={idx}>
						<Image
							src={urlFor(c.titleImage).url()}
							alt='image'
							width={500}
							height={500}
							className='object-fit m-auto rounded-md'
						/>
						<CardContent className='mt-5 !p-0 !m-0'>
							<h3 className='mt-5 text-lg font-bold line-clamp-2'>{c.title}</h3>
							<p className='text-sm line-clamp-3 mt-2 text-muted-foreground'>
								{c.smallDesc}
							</p>
							<div>
								<p className='mt-1'>{formatDate(c._createdAt)}</p>
							</div>
							<Button asChild className='w-full mt-7'>
								<Link href={`/blog/${c.currentSlug}`}>Read more</Link>
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
