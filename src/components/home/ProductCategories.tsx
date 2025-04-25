import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeImage from '@/components/common/SafeImage';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';

// Категории продуктов
const categories = [
  { id: 'chairs', title: 'КРЕСЛА', images: [] },
  { id: 'sofas', title: 'ДИВАНЫ', images: [] },
  { id: 'coffee-tables', title: 'ЖУРНАЛЬНЫЕ СТОЛИКИ', images: [] },
  { id: 'dining-tables', title: 'ОБЕДЕННЫЕ СТОЛЫ', images: [] },
  { id: 'other', title: 'ДРУГАЯ МЕБЕЛЬ', images: [] },
  { id: 'consoles', title: 'КОНСОЛИ', images: [] },
  { id: 'table-bases', title: 'ПОДСТОЛЬЯ', images: [] },
];

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [direction, setDirection] = useState(0); // -1 влево, 1 вправо

  // Создаем 4 компонента для каждой категории
  const placeholderCount = 4;

  // Устанавливаем направление анимации при смене категории
  const handleCategoryChange = (category: typeof categories[0]) => {
    const currentIndex = categories.findIndex(c => c.id === activeCategory.id);
    const nextIndex = categories.findIndex(c => c.id === category.id);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveCategory(category);
  };

  return (
    <div className='w-full bg-[#f4f2ee] py-16'>
      <div className='max-w-[2024px] mx-auto px-4 md:px-8'>
        <div className='mb-6 md:mb-8'>
          <div className='inline-block border border-[#333333] p-3 md:p-4'>
            <div className='flex items-center'>
              <div className='text-center mr-2 md:mr-4 ml-2 md:ml-4'>·</div>
              <div className='text-[#333333] text-base md:text-lg uppercase font-medium'>
                НАШИ ТОВАРЫ
              </div>
              <div className='text-center ml-2 md:ml-4 mr-2 md:mr-4'>·</div>
            </div>
          </div>
        </div>

        <h2 className='text-[#333333] text-3xl md:text-5xl font-bold mb-10 md:mb-12'>
          КРЕСЛА И ДИВАНЫ, ДИВАНЫ ЖУРНАЛЬНЫЕ СТОЛИКИ, ОБЕДЕННЫЕ СТОЛЫ, ДРУГАЯ МЕБЕЛЬ, КОНСОЛИ, ПОДСТОЛЬЯ
        </h2>

        {/* Меню категорий */}
        <div className='mb-8 md:mb-12 overflow-x-auto'>
          <div className='flex space-x-4 md:space-x-8 min-w-max'>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-3 py-2 md:px-4 md:py-3 text-sm md:text-base font-medium uppercase transition-colors duration-300 ${
                  activeCategory.id === category.id
                    ? 'bg-[#333333] text-white'
                    : 'bg-white text-[#333333] hover:bg-gray-100'
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка изображений с анимацией */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div 
            key={activeCategory.id}
            custom={direction}
            initial={{ 
              opacity: 0,
              x: direction * 50 
            }}
            animate={{ 
              opacity: 1,
              x: 0,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30
              }
            }}
            exit={{ 
              opacity: 0,
              x: direction * -50,
              transition: { duration: 0.2 }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {Array.from({ length: placeholderCount }).map((_, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: index * 0.1,
                    duration: 0.3
                  }
                }}
                className="aspect-square overflow-hidden border border-[#403A34]"
              >
                <div className="w-full h-full relative group">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-[#403A34] z-10"></div>
                  <motion.div 
                    className="w-full h-full"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <ImagePlaceholder 
                      category={activeCategory.title} 
                      index={index}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 