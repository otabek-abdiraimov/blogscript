import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { blogCard } from '@/lib/interface'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
	const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDesc,
      "currentSlug": slug.current,
      titleImage
  }`

	const data: blogCard[] = await client.fetch(query)

	return data
}
export default async function Home() {
	const data = await getData()

	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
			{data.map((c, idx) => (
				<Card className='p-3' key={idx}>
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
						<Button asChild className='w-full mt-7'>
							<Link href={`/blog/${c.currentSlug}`}>Read more</Link>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
