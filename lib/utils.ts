import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function calculateReadingTime(mdxContent: any) {
	console.log('mdxContent type:', typeof mdxContent)
	console.log('mdxContent:', mdxContent)

	const wordsPerMinute = 200

	// Convert mdxContent to a string if it is not already
	const text = String(mdxContent).replace(/<\/?[^>]+(>|$)/g, '')
	const wordCount = text
		.split(/\s+/)
		.filter((word: string) => word.length > 0).length

	// Calculate reading time
	const readingTime = Math.ceil(wordCount / wordsPerMinute)

	return readingTime
}
