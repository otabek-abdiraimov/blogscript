import { blogCard, fullBlog } from '@/lib/interface'
import { client, urlFor } from '@/lib/sanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

export const revalidate = 30 // revalidate at most 30 seconds

async function getData(slug: string) {
	const query = `
		*[_type=='blog' && slug.current == '${slug}'] {
			'currentSlug': slug.current,
				title,
				content,
				titleImage
		}[0]
	`

	const data = await client.fetch(query)

	return data
}

export default async function SingleBlogPage({
	params,
}: {
	params: { slug: string }
}) {
	const { content, currentSlug, title, titleImage }: fullBlog = await getData(
		params.slug
	)

	return (
		<div className='mt-8 mx-auto px-4 max-w-6xl'>
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
					width={800}
					height={800}
					priority
					className='object-fit m-auto rounded-lg my-8 border'
				/>
				<div className='m-auto mt-16 mb-5 prose prose-blue prose-sm md:prose-xl xl:prose-2xl dark:prose-invert prose-li:marker:text-slate-500'>
					<PortableText value={content} />
				</div>
			</h1>
		</div>
	)
}
