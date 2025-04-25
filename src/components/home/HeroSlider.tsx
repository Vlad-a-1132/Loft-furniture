'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SlideItem {
	id: number
	image: string
	title: string
	link: string
}

export default function HeroSlider() {
	const slides: SlideItem[] = [
		{
			id: 1,
			image: '/images/Group-6.png',
			title: 'СТОЛЫ',
			link: '/products/tables',
		},
		{
			id: 2,
			image: '/images/Group-5-1.png',
			title: 'СТЕЛЛАЖИ',
			link: '/products/shelves',
		},
		{
			id: 3,
			image: '/images/Group-7.png',
			title: 'КОНСОЛИ',
			link: '/products/consoles',
		},
	]

	const [currentSlide, setCurrentSlide] = useState(0)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)

		// Автоматическое переключение слайдов
		const interval = setInterval(() => {
			setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
		}, 5000)

		return () => clearInterval(interval)
	}, [slides.length])

	const goToSlide = (index: number) => {
		setCurrentSlide(index)
	}

	return (
		<div className='relative w-full h-[calc(100vh-74px)] overflow-hidden bg-[#f4f2ee]'>
			<div className='relative w-full h-full max-w-[2024px] mx-auto border border-[#403A34]'>
				{/* Маленький квадратик в углу как на других элементах */}
				<div className='absolute top-2 right-2 w-2 h-2 bg-[#403A34] z-10'></div>
				
				{/* Основное изображение */}
				<div
					className={`absolute inset-0 transition-opacity duration-1000 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<div className='relative w-full h-full'>
						<Image
							src={slides[currentSlide].image || '/images/Group-6.png'}
							alt={slides[currentSlide].title}
							fill
							priority
							className='object-cover'
							onLoad={() => setIsLoaded(true)}
						/>
					</div>
				</div>

				{/* Заголовок ЛОФТ */}
				<div className='absolute top-[100px] left-16 z-20'>
					<div className='text-[#333333] text-2xl font-medium'>ЛОФТ</div>
				</div>

				{/* Большой заголовок СТОЛЫ */}
				<div className='absolute bottom-20 left-16 z-20'>
					<h1 className='text-[#333333] text-[12rem] font-bold uppercase tracking-wider leading-none'>
						{slides[currentSlide].title}
					</h1>
		
				</div>

				{/* Маленькие картинки слайдера снизу */}
				<div className='absolute bottom-20 right-16 z-20 flex items-center gap-4'>
					{slides.map((slide, index) => (
						<div
							key={slide.id}
							className={`w-[120px] h-[80px] relative cursor-pointer ${
								index === currentSlide 
									? 'border-2 border-[#403A34]' 
									: 'border border-[#403A34] opacity-70 hover:opacity-100'
							} transition-all duration-300`}
							onClick={() => goToSlide(index)}
						>
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								className='object-cover'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
