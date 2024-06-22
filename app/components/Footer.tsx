import Link from 'next/link'
import React from 'react'

export default function Footer() {
	function getDate() {
		const date = new Date()
		return date.getFullYear()
	}

	return (
		<div>
			<p className='text-center my-10'>
				&copy; {getDate()} Copyright by{' '}
				<Link className='underline' href={'https://t.me/otabek_abdiraimov'}>
					Otabek Abdiraimov
				</Link>
			</p>
		</div>
	)
}
