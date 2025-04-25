'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SafeImage from '@/components/common/SafeImage';

// Временные данные для мебели - позже заменить на реальные фото
// Для заполнителей используем существующие фото мебели
const furnitureImages = [
  '/images/Стеллажи в стиле лофт от компании Rooms.png',
  '/images/Стулья в стиле лофт от компании Rooms.png',
  '/images/журнальные столики Rooms.png',
  '/images/Консоли в стиле лофт от компании Rooms.png',
  '/images/подстолья в стиле лофт от компании Rooms.png',
  '/images/shkaf.png',
];

// Категории продуктов
const categories = [
  { id: 'chairs', title: 'КРЕСЛА', images: [furnitureImages[1], furnitureImages[0], furnitureImages[2], furnitureImages[3]], link: '/products/chairs', price: 'От 3.500 Р' },
  { id: 'sofas', title: 'ДИВАНЫ', images: [furnitureImages[2], furnitureImages[5], furnitureImages[1], furnitureImages[0]], link: '/products/sofas', price: 'От 35.000 Р' },
  { id: 'coffee-tables', title: 'ЖУРНАЛЬНЫЕ СТОЛИКИ', images: [furnitureImages[2], furnitureImages[3], furnitureImages[5], furnitureImages[1]], link: '/products/coffee-tables', price: 'От 5.000 Р' },
  { id: 'dining-tables', title: 'ОБЕДЕННЫЕ СТОЛЫ', images: [furnitureImages[5], furnitureImages[4], furnitureImages[3], furnitureImages[0]], link: '/products/dining-tables', price: 'От 25.000 Р' },
  { id: 'other', title: 'ДРУГАЯ МЕБЕЛЬ', images: [furnitureImages[0], furnitureImages[1], furnitureImages[4], furnitureImages[3]], link: '/products/other', price: 'От 10.000 Р' },
  { id: 'consoles', title: 'КОНСОЛИ', images: [furnitureImages[3], furnitureImages[5], furnitureImages[2], furnitureImages[0]], link: '/products/consoles', price: 'От 20.000 Р' },
  { id: 'table-bases', title: 'ПОДСТОЛЬЯ', images: [furnitureImages[4], furnitureImages[0], furnitureImages[3], furnitureImages[2]], link: '/products/table-bases', price: 'От 6.000 Р' },
];

// Заполнители для пустых изображений
const placeholderColors = [
  'bg-stone-300',
  'bg-stone-400',
  'bg-stone-500',
  'bg-stone-600',
];

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className='w-full bg-[#f4f2ee] py-16'>
      <div className='max-w-[2024px] mx-auto px-4 md:px-8'>
        {/* Заголовок НАШИ ТОВАРЫ */}
        <div className='text-sm uppercase text-[#333333] font-medium mb-6'>
          НАШИ ТОВАРЫ
        </div>
        
        {/* Основной заголовок */}
        <h2 className='text-[#333333] text-3xl md:text-5xl font-bold mb-10 md:mb-16 leading-tight'>
          КРЕСЛА И ДИВАНЫ, ДИВАНЫ <br />
          ЖУРНАЛЬНЫЕ СТОЛИКИ, <br />
          ОБЕДЕННЫЕ СТОЛЫ, <br />
          ДРУГАЯ МЕБЕЛЬ, КОНСОЛИ, <br />
          ПОДСТОЛЬЯ
        </h2>

        {/* Меню категорий в виде горизонтальной линии */}
        <div className='mb-8 md:mb-16 border-t border-b border-[#333333] py-3'>
          <div className='flex flex-wrap gap-x-8 gap-y-3'>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`text-sm md:text-base font-medium uppercase transition-colors ${
                  activeCategory.id === category.id
                    ? 'text-black'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка изображений с анимацией */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-14"
          >
            {activeCategory.images.map((image, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }}
                className="relative"
              >
                <div className="aspect-square relative border border-[#403A34]">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-[#403A34] z-10"></div>
                  <Link href={activeCategory.link} className="block w-full h-full group overflow-hidden">
                    <motion.div 
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <SafeImage 
                        src={image} 
                        alt={`${activeCategory.title} ${index + 1}`}
                        fill
                        className="object-cover"
                        placeholderType="product"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                  
                  {/* Контейнер внизу с категорией */}
                  <div className="absolute bottom-0 left-0 flex w-[100%] z-10">
                    <div className="bg-[#F6F1EB] border-t border-r border-[#403A34] py-4 px-6 flex-1 h-[53.33px] flex items-center">
                      <span className="mr-2 text-sm">·</span>
                      <span className="text-sm font-semibold uppercase text-[#403A34]">
                        {activeCategory.title}
                      </span>
                    </div>
                    <div className="bg-[#403A34] text-white font-medium text-sm uppercase flex items-center justify-center w-[120px] h-[53.33px] border-t border-[#403A34]">
                      ПОСМОТРЕТЬ
                    </div>
                  </div>
                </div>
                
                {/* Контейнер под картинкой с ценой */}
                <div className="flex justify-between items-center py-4 px-6 border-b border-l border-r border-[#403A34] w-[70%] ml-0">
                  <div className="text-sm font-medium text-[#403A34] uppercase">
                    ЛОФТ
                  </div>
                  <div className="text-sm font-medium text-[#403A34]">
                    {activeCategory.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 