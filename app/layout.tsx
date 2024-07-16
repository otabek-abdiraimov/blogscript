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
				url: 'https://bilimxona.uz/BlogScript.png',
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
		images: 'https://bilimxona.uz/BlogScript.png',
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
				<meta property='og:title' content='Bilimxona' />
				<meta
					property='og:description'
					content="Samaradorlik, dasturlash, moliyaviy savodxonlik, kitoblar va boshqa mavzular haqida maqolalar o'qing."
				/>
				<meta property='og:url' content='https://bilimxona.uz' />
				<meta property='og:site_name' content='Bilimxona' />
				<meta
					property='og:image'
					content='https://bilimxona.uz/BlogScript.png'
				/>
				<meta property='og:image:width' content='800' />
				<meta property='og:image:height' content='600' />
				<meta property='og:locale' content='uz_UZ' />
				<meta property='og:type' content='website' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@Abdiraimov_' />
				<meta name='twitter:title' content='Bilimxona' />
				<meta
					name='twitter:description'
					content="Otabek Abdiraimov tomonidan yozilgan maqolalarni o'rganing: samaradorlik, dasturlash, moliyaviy savodxonlik, matematika, fizika va boshqalar."
				/>
				<meta
					name='twitter:image'
					content='https://bilimxona.uz/BlogScript.png'
				/>
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
