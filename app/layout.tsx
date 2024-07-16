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
		'Otabek Abdiraimov tomonidan yuritiladigan blog. Bu yerda samaradorlik, dasturlash, moliyaviy savodxonlik va boshqa mavzularda maqolalarni topishingiz mumkin.',
	authors: [{ name: 'Otabek Abdiraimov' }],
	keywords: [
		'Blog',
		'dasturchi blog',
		'Otabek Abdiraimov',
		'Otabek',
		'Abdiraimov',
		'Samaradorlik',
		'Dasturlash',
		'Moliyaviy Savodxonlik',
		'Matematika',
		'Fizika',
		'Otabek Abdiraimov',
		'Productivity',
		'Javascript',
		'samaradorlik maqolalari',
		'uzbek tilida maqola',
		'uzbek tilida maqolalar',
		"o'zbek tilida maqolalar",
		'wikipedia uzbek',
		'Bilimxona',
		'Samaradorlik',
		'bilim',
		'muvaqqayiyatga erishish',
		'natija',
		'kitob',
		'kitoblar',
	],
	applicationName: 'Bilimxona',
	generator: 'Next.js',
	openGraph: {
		title: 'Bilimxona',
		description:
			"Samaradorlik, dasturlash, moliyaviy savodxonlik, kitoblar va boshqa mavzular haqida maqolalar o'qing.",
		url: 'https://bilimxona.uz',
		siteName: 'Bilimxona',
		images: [
			{
				url: '/BlogScript.png',
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
		images: '/BlogScript.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='uz_UZ' suppressHydrationWarning>
			<head>
				<link rel='icon' href='/favicon.ico' />
				<link rel='canonical' href='https://bilimxona.uz' />
			</head>
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
