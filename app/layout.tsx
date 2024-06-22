import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "Bilimxona - o'zbek tilida maqolalar",
	description:
		'Otabek Abdiraimov tomonidan yuritiladigan blog. Bu yerda samaradorlik, dasturlash, moliyaviy savodxonlik, matematika, fizika va boshqa mavzularda maqolalarni topishingiz mumkin.',
	authors: [{ name: 'Otabek Abdiraimov' }],
	keywords: [
		'Blog',
		'Samaradorlik',
		'Dasturlash',
		'Moliyaviy Savodxonlik',
		'Matematika',
		'Fizika',
		'Otabek Abdiraimov',
		'Productivity',
		'Javascript',
		'uzbek tilida maqola',
		'uzbek tilida maqolalar',
		'wikipedia uzbek',
	],
	applicationName: 'Bilimxona',
	generator: 'Next.js',
	openGraph: {
		title: 'Bilimxona',
		description:
			"Samaradorlik, dasturlash, moliyaviy savodxonlik, matematika, fizika va boshqa mavzularda maqolalarni o'rganing.",
		url: 'https://blog-script.vercel.app',
		siteName: 'Bilimxona',
		images: [
			{
				url: '/Bilimxona.png',
				width: 800,
				height: 600,
				alt: 'Bilimxona',
			},
		],
		locale: 'uz_UZ',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@Abdiraimov_',
		title: 'Bilimxona',
		description:
			"Otabek Abdiraimov tomonidan yozilgan maqolalarni o'rganing: samaradorlik, dasturlash, moliyaviy savodxonlik, matematika, fizika va boshqalar.",
		images: '/Bilimxona.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<main className='mx-auto px-4 max-w-6xl'>
						<Navbar />
						{children}
						<Footer />
						<Analytics />
					</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
