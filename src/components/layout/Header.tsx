'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  // Product categories for the dropdown menu
  const productCategories = [
    { name: 'Все товары', link: '/products', default: true },
    { name: 'Стеллажи', link: '/products/shelves' },
    { name: 'Кресла и диваны', link: '/products/sofas' },
    { name: 'Шкафы и тумбы', link: '/products/cabinets' },
    { name: 'Офисная мебель', link: '/products/office' },
    { name: 'Мебель для дома', link: '/products/home' },
    { name: 'Столы', link: '/products/tables' },
    { name: 'Офисные Кресла и диваны', link: '/products/office-sofas' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductHover = (index: number) => {
    setActiveProductIndex(index);
  };

  // Reset active product when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setActiveProductIndex(0);
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full left-0 top-0 z-50 mt-[62px]">
      <div className="w-full max-w-[2024px] h-[60px] mx-auto px-neg header-container">
        <div className="w-full h-full flex items-center border border-black bg-[#f8f7f4]">
          {/* Logo */}
          <div className="h-full border-r border-black flex justify-center items-center px-10">
            <Link href="/" aria-label="Home" className="flex items-center">
              <svg width="48" height="19" viewBox="0 0 48 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.0612 0.404715C28.0612 0.404715 12.5686 8.31246 0 13.3754C0 13.3754 16.9078 7.49496 22.2078 5.55647C22.2078 5.55647 19.8824 7.35296 19.6078 9.85246C19.6078 9.85246 24.4078 8.34371 25.6078 6.26246C25.6078 6.26246 30.0627 8.50122 31.2588 11.9574C31.2588 11.9574 29.1451 9.0812 26.2 7.91121C26.2 7.91121 33.0274 6.48946 36.8 6.67797C36.8 6.67797 32.2 8.18496 29.6 10.2675C29.6 10.2675 35.8078 7.16246 38.2078 7.00121C38.2078 7.00121 35.4392 8.34221 34.8078 9.75246C34.8078 9.75246 41.2078 9.52246 44.2078 11.1062C44.2078 11.1062 39.8039 9.25246 37.8078 9.55246C37.8078 9.55246 41.0706 10.4375 42.8078 11.4212C42.8078 11.4212 41.0431 11.5137 39.6078 10.7525C39.6078 10.7525 43.2078 11.7525 47.0667 14.1062C47.0667 14.1062 43.8078 13.1062 40.4078 11.7525C40.4078 11.7525 43.5216 13.1062 45.2078 15.1062C45.2078 15.1062 43.1025 14.0837 40.6078 12.5525C40.6078 12.5525 42.9765 13.6375 43.6078 14.7525C43.6078 14.7525 41.8078 14.1906 40.0078 12.9525C40.0078 12.9525 40.8078 13.7525 42.0078 14.7525C42.0078 14.7525 39.1686 14.15 37.4078 12.7525C37.4078 12.7525 35.7373 13.1631 34.8078 13.5525C34.8078 13.5525 37.4078 13.7525 38.6078 15.5525C38.6078 15.5525 35.2745 15.1537 33.0078 14.3525C33.0078 14.3525 30.9451 16.0837 31.0078 18.1525C31.0078 18.1525 29.8078 14.5525 32.0078 12.5525C32.0078 12.5525 27.2078 11.7525 26.6078 11.1525C26.6078 11.1525 27.6078 11.1525 28.8078 11.1525C28.8078 11.1525 27.2078 10.5525 26.6078 9.55246C26.6078 9.55246 28.2745 10.9512 30.0078 11.5525C30.0078 11.5525 28.6078 9.15246 25.4078 8.35246C25.4078 8.35246 26.8078 8.75246 27.8078 9.15246C27.8078 9.15246 25.8078 6.35246 28.0078 1.95246C28.0078 1.95246 28.0627 1.17372 28.0612 0.404715Z" fill="black" stroke="black" strokeWidth="0.2"/>
              </svg>
            </Link>
          </div>
          
          {/* Products dropdown */}
          <div className="h-full border-r border-black">
            <div 
              className="h-full px-10 flex items-center text-xs uppercase font-bold cursor-pointer"
              onClick={toggleMenu}
            >
              <div className="flex items-center gap-x-1">
                <span>Товары</span>
                <span className="inline-block w-[0.8rem] mt-1">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.5L5 4.5L9 0.5" stroke="currentColor"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          
          {/* Spacer - flexible space */}
          <div className="flex-grow"></div>
          
          {/* Navigation links */}
          <Link href="/collection" className="h-full border-l border-black px-10 flex items-center text-xs uppercase font-bold">
            Коллекция
          </Link>
          
          <Link href="/about" className="h-full border-l border-black px-10 flex items-center text-xs uppercase font-bold">
            О нас
          </Link>
          
          <Link href="/delivery" className="h-full border-l border-black px-10 flex items-center text-xs uppercase font-bold">
            Доставка
          </Link>
          
          <Link href="/contacts" className="h-full border-l border-black px-10 flex items-center text-xs uppercase font-bold">
            Контакты
          </Link>
          
          {/* Phone icon */}
          <div className="h-full border-l border-black px-10 flex items-center">
            <a href="tel:+79252119666" className="flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9995 17.0005C18.1995 17.0005 17.3995 16.8005 16.6995 16.5005C16.3995 16.4005 15.9995 16.5005 15.7995 16.7005L14.1995 18.3005C11.3995 16.9005 9.0995 14.6005 7.6995 11.8005L9.2995 10.2005C9.4995 10.0005 9.5995 9.60047 9.4995 9.30047C9.1995 8.60047 9.0995 7.80047 9.0995 7.00047C9.0995 6.40047 8.5995 6.00047 7.9995 6.00047H4.9995C4.3995 6.00047 3.9995 6.40047 3.9995 7.00047C3.9995 15.0005 10.4995 21.0005 18.9995 21.0005C19.5995 21.0005 19.9995 20.6005 19.9995 20.0005V17.0005C19.9995 16.4005 19.5995 16.0005 18.9995 16.0005V17.0005Z" fill="black"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Products dropdown menu */}
        {isMenuOpen && (
          <div className="w-full bg-[#f8f7f4] border-b border-x border-black">
            <div className="grid grid-cols-2 gap-4 py-6 px-neg">
              <div className="space-y-4">
                {productCategories.map((category, index) => (
                  <Link 
                    key={index}
                    href={category.link}
                    className="block text-xs font-bold uppercase hover:text-gray-600"
                    onMouseEnter={() => handleProductHover(index)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={`/images/${activeProductIndex === 0 ? 'products' : productCategories[activeProductIndex]?.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  alt={productCategories[activeProductIndex]?.name || "Product category"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay for dropdown menu */}
      {isMenuOpen && (
        <div 
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 z-[-1]"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}