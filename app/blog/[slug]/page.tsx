import { blogCard, fullBlog } from '@/lib/interface'
import { client, urlFor } from '@/lib/sanity'
import { Metadata } from 'next'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { ReportView } from './view'
import { Redis } from '@upstash/redis'
import { Dot } from 'lucide-react'
import { calculateReadingTime } from '@/lib/utils'

const redis = Redis.fromEnv()

export const revalidate = 30

async function getData(slug: string) {
	const query = `
		*[_type=='blog' && slug.current == '${slug}'] {
			'currentSlug': slug.current,
			_createdAt,
				title,
				content,
				titleImage,
		}[0]
	`

	const data = await client.fetch(query)

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

export async function generateMetadata({
	params: { slug },
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const data = await getData(slug)
	return {
		title: data.title,
		description: data.smallDesc,
	}
}
export default async function SingleBlogPage({
	params,
}: {
	params: { slug: string }
}) {
	const { content, currentSlug, title, titleImage, _createdAt }: fullBlog =
		await getData(params.slug)

	const views = redis.mget<number[]>(
		['pageviews', 'posts', params.slug].join(':')
	)

	return (
		<div className='mt-8 mx-auto px-4 max-w-6xl'>
			<ReportView slug={currentSlug} />
			<h1>
				<span className='block text-base text-center text-primary font-semibold tracking-wide uppercase text-slate-500'>
					Otabek Abdiraimov - Blog
				</span>
				<span className='mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl'>
					{title}
				</span>
				<Image
					src={urlFor(titleImage).url()}
					alt='image'
					width={860}
					height={800}
					priority
					className='object-fit m-auto rounded-lg mt-8 border'
				/>
				<div className='flex items-center justify-center my-4 gap-1 text-sm md:text-xl'>
					<p>{views} ta ko&apos;rishlar</p>
					<Dot />
					<p>{formatDate(_createdAt)}</p>
					<Dot />
					<span>
						o&apos;qishga ketadigan vaqt: {calculateReadingTime(content)} daqiqa
					</span>
				</div>
				<div className='m-auto mb-5 prose prose-blue prose-sm md:prose-xl xl:prose-2xl dark:prose-invert prose-li:marker:text-slate-500'>
					<PortableText value={content} />
				</div>
			</h1>
		</div>
	)
}
