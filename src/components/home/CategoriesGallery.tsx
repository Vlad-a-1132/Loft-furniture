'use client';

import { useState } from 'react';
import SafeImage from '@/components/common/SafeImage';

// Категории мебели с соответствующими изображениями
const categories = [
  {
    id: 'armchairs',
    name: 'Кресла',
    images: [
      '/images/Стулья в стиле лофт от компании Rooms.png',
      '/images/Стулья в стиле лофт от компании Rooms.png'
    ]
  },
  {
    id: 'sofas',
    name: 'Диваны',
    images: [
      '/images/Group-5-1.png',
      '/images/Group-5-1.png'
    ]
  },
  {
    id: 'coffee_tables',
    name: 'Журнальные столики',
    images: [
      '/images/журнальные столики Rooms.png',
      '/images/журнальные столики Rooms.png'
    ]
  },
  {
    id: 'dining_tables',
    name: 'Обеденные столы',
    images: [
      '/images/Group-5-1.png',
      '/images/Group-5-1.png'
    ]
  },
  {
    id: 'hotel_furniture',
    name: 'Мебель для отелей',
    images: [
      '/images/oteli.png',
      '/images/oteli.png'
    ]
  },
  {
    id: 'office_furniture',
    name: 'Мебель для офиса',
    images: [
      '/images/офисная мебель от компании rooms.jpg',
      '/images/офисная мебель от компании rooms.jpg'
    ]
  },
  {
    id: 'consoles',
    name: 'Консоли',
    images: [
      '/images/Консоли в стиле лофт от компании Rooms.png',
      '/images/Консоли в стиле лофт от компании Rooms.png'
    ]
  },
  {
    id: 'table_bases',
    name: 'Подстолья',
    images: [
      '/images/подстолья в стиле лофт от компании Rooms.png',
      '/images/подстолья в стиле лофт от компании Rooms.png'
    ]
  }
];

export default function CategoriesGallery() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  
  // Найти текущую активную категорию
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <div className='w-full bg-[#f3f0ec] my-16'>
      <div className='max-w-[2024px] mx-auto px-0'>
        {/* Заголовок секции */}
        <div className='px-[64px] py-8'>
          <div className='text-[#403A34] text-lg uppercase mb-4'>OUR CATEGORIES</div>
          <h2 className='text-[#403A34] text-6xl font-bold uppercase'>
            КРЕСЛА, ДИВАНЫ, <br />
            СТОЛИКИ, ОБЕДЕННЫЕ СТОЛЫ, <br />
            МЕБЕЛЬ, КОНСОЛИ, ПОДСТОЛЬЯ
          </h2>
        </div>

        <div className='flex flex-col lg:flex-row'>
          {/* Левая колонка с категориями */}
          <div className='lg:w-[40%] border-t border-r border-[#403A34] py-8'>
            <ul className='pl-[64px]'>
              {categories.map((category) => (
                <li 
                  key={category.id}
                  className={`mb-6 cursor-pointer transition-colors duration-300 ${
                    activeCategory === category.id ? 'text-[#403A34]' : 'text-[#c9c5be]'
                  }`}
                  onMouseEnter={() => setActiveCategory(category.id)}
                >
                  <span className='text-3xl font-bold uppercase'>{category.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Правая колонка с изображениями */}
          <div className='lg:w-[60%] border-t border-[#403A34]'>
            <div className='grid grid-cols-2 gap-4 p-8'>
              {currentCategory.images.map((image, index) => (
                <div 
                  key={`${currentCategory.id}-${index}`} 
                  className='relative h-[300px] border border-[#403A34]'
                >
                  <div className='absolute top-2 left-2 w-2 h-2 bg-[#403A34]'></div>
                  <SafeImage
                    src={image}
                    alt={currentCategory.name}
                    fill
                    className='object-cover'
                    placeholderType='product'
                  />
                  <div className='absolute bottom-0 left-0 flex w-full bg-[#F6F1EB]'>
                    <div className='border-t border-r border-[#403A34] py-4 px-6 flex-1 h-[53.33px] flex items-center'>
                      <span className='mr-2 text-sm'>·</span>
                      <span className='text-sm font-semibold uppercase text-[#403A34]'>
                        {currentCategory.name}
                      </span>
                    </div>
                    <div className='bg-[#403A34] text-white font-medium text-sm uppercase flex items-center justify-center w-[120px] h-[53.33px] border-t border-[#403A34]'>
                      ПОСМОТРЕТЬ
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 