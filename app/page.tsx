import React from 'react'
import { Hero } from './components/Hero'
import About from './components/About'
import Contacting from './components/Contacting'
import LatestBlogs from './components/LatestBlogs'

export default function page() {
	return (
		<div>
			<Hero />
			<About />
			<LatestBlogs />
			<Contacting />
		</div>
	)
}
