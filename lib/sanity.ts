import ImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
	apiVersion: '2023-05-03',
	dataset: 'production',
	projectId: 'eciagu8f',
	useCdn: false,
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
	return builder.image(source)
}
