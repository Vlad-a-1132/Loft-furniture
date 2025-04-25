import Link from 'next/link';
import SafeImage from '@/components/common/SafeImage';
import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';

// Компонент категории товаров
function CategoryCard({ title, image, link }: { title: string; image: string; link: string }) {
  return (
    <div className="relative group overflow-hidden">
      <div className="h-64 relative">
        <SafeImage 
          src={image} 
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
          placeholderType="category"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={link} className="px-6 py-2 bg-white hover:bg-opacity-90 transition-all">
          {title}
        </Link>
      </div>
    </div>
  );
}

// Компонент секции товаров
function ProductSection({ title, products }: { title: string; products: { name: string; category: string; price: string; image: string; link: string }[] }) {
  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group">
            <div className="relative h-64 mb-4 overflow-hidden">
              <SafeImage 
                src={product.image} 
                alt={product.name}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                placeholderType="product"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">{product.category}</span>
                <span className="font-bold">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  // Данные для главной страницы
  const featuredCategories = [
    { title: 'Стеллажи', image: '/images/shelves.jpg', link: '/products/shelves' },
    { title: 'Консоли', image: '/images/consoles.jpg', link: '/products/consoles' },
    { title: 'Столы', image: '/images/tables.jpg', link: '/products/tables' },
  ];

  const featuredProducts = [
    { name: 'Шкаф BOCUSE', category: 'Лофт', price: 'От 23.500 Р', image: '/images/cabinet.jpg', link: '/products/cabinets/bocuse' },
    { name: 'Журнальный столик ЛОФТ', category: 'Лофт', price: 'От 5.000 Р', image: '/images/coffee-table.jpg', link: '/products/tables/coffee/loft' },
    { name: 'Консоль ЛОФТ', category: 'Лофт', price: 'От 20.000 Р', image: '/images/console.jpg', link: '/products/consoles/loft' },
    { name: 'Стул ЛОФТ', category: 'Лофт', price: 'От 3.500 Р', image: '/images/chair.jpg', link: '/products/chairs/loft' },
  ];

  return (
    <div>
      {/* Слайдер как на скриншоте */}
      <HeroSlider />

      {/* Блок ДИЗАЙНЕРСКАЯ УНИКАЛЬНАЯ МЕБЕЛЬ */}
      <div className='w-full bg-[#f4f2ee] py-12'>
        <div className='max-w-[2024px] mx-auto px-0'>
          <h2 className='text-[#333333] text-5xl font-bold mb-8'>
            ДИЗАЙНЕРСКАЯ УНИКАЛЬНАЯ МЕБЕЛЬ
          </h2>
          <div className='inline-block border border-[#333333] p-4'>
            <div className='flex items-center'>
              <div className='text-center mr-4 ml-4'>·</div>
              <div className='text-[#333333] text-lg uppercase'>
                НАША КОНЦЕПЦИЯ
              </div>
              <div className='text-center ml-4 mr-4'>·</div>
            </div>
          </div>
        </div>
      </div>

      {/* Блок с витриной мебели */}
      <div className='w-full bg-[#f4f2ee] py-10'>
        <div className='max-w-[2024px] mx-auto px-0'>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='lg:w-[913.33px]'>
              {/* Левая часть - большое фото */}
              <div className='border border-[#333333] w-full h-[675.86px] relative mb-0'>
                <div className='absolute top-2 right-2 w-2 h-2 bg-[#333333]'></div>
                <div className='w-full h-full relative'>
                  <SafeImage
                    src='/images/shkaf.png'
                    alt='Шкаф ЛОФТ'
                    fill
                    className='object-cover'
                    placeholderType='product'
                  />
                </div>

                {/* Контейнер внизу с текстом "шкафы" */}
                <div className='absolute bottom-0 left-0 flex w-[531.16px]'>
                  <div className='bg-[#F6F1EB] border-t border-r border-[#403A34] py-4 px-6 w-[373.33px] h-[53.33px] flex items-center'>
                    <span className='mr-2 text-sm'>·</span>
                    <span className='text-sm font-semibold uppercase text-[#403A34]'>
                      ШКАФЫ
                    </span>
                  </div>
                  <div className='bg-[#403A34] text-white font-medium text-sm uppercase flex items-center justify-center w-[157.83px] h-[52.33px] border-t border-[#403A34]'>
                    ПОСМОТРЕТЬ
                  </div>
                </div>
              </div>

              {/* Контейнер под картинкой с ЛОФТ и ценой */}
              <div className='w-[531.16px] border-b border-l border-r border-[#403A34] h-[92.33px] flex justify-between items-center px-6 py-4'>
                <div className='text-sm font-medium text-[#403A34] uppercase'>
                  ЛОФТ
                </div>
                <div className='text-sm font-medium text-[#403A34]'>
                  От 23.000Р
                </div>
              </div>
            </div>

            {/* Правая часть - текст и 2 фото */}
            <div className='lg:flex-1 flex flex-col justify-between'>
              <div className='text-right'>
                <h3 className='text-[#333333] text-2xl font-bold mb-2'>
                  ПОСМОТРЕТЬ НАША УНИКАЛЬНАЯ,
                </h3>
                <h3 className='text-[#333333] text-2xl font-bold mb-2'>
                  ЭКОЛОГИЧНАЯ МЕБЕЛЬ ИЗ
                </h3>
                <h3 className='text-[#333333] text-2xl font-bold'>
                  ПЕРЕРАБОТАННОГО ЛДСП РУЧНОЙ РАБОТЫ
                </h3>
              </div>

              {/* 2 фото в ряд */}
              <div className='flex space-x-6 mt-auto'>
                {/* Фото 1 - Журнальные столики */}
                <div className='w-1/2 relative'>
                  <div className='border border-[#403A34] w-full h-[433px] relative mb-0'>
                    <div className='absolute top-2 left-2 w-2 h-2 bg-[#403A34]'></div>
                    <div className='w-full h-full relative'>
                      <SafeImage
                        src='/images/журнальные столики Rooms.png'
                        alt='Журнальный столик ЛОФТ'
                        fill
                        className='object-cover'
                        placeholderType='product'
                      />
                    </div>

                    {/* Контейнер внизу с текстом "журнальные столики" */}
                    <div className='absolute bottom-0 left-0 flex w-[70%]'>
                      <div className='bg-[#F6F1EB] border-t border-r border-[#403A34] py-4 px-6 flex-1 h-[53.33px] flex items-center'>
                        <span className='mr-2 text-sm'>·</span>
                        <span className='text-sm font-semibold uppercase text-[#403A34]'>
                          ЖУРНАЛЬНЫЕ СТОЛИКИ
                        </span>
                      </div>
                      <div className='bg-[#403A34] text-white font-medium text-sm uppercase flex items-center justify-center w-[120px] h-[53.33px] border-t border-[#403A34]'>
                        ПОСМОТРЕТЬ
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center py-7 px-4 border-b border-l border-r border-[#403A34] w-[70%] ml-0'>
                    <div className='text-sm font-medium text-[#403A34] uppercase'>
                      ЛОФТ
                    </div>
                    <div className='text-sm font-medium text-[#403A34]'>
                      От 5.000Р
                    </div>
                  </div>
                </div>

                {/* Фото 2 - Консоли */}
                <div className='w-1/2 relative'>
                  <div className='border border-[#403A34] w-full h-[433px] relative mb-0'>
                    <div className='absolute top-2 left-2 w-2 h-2 bg-[#403A34]'></div>
                    <div className='w-full h-full relative'>
                      <SafeImage
                        src='/images/Консоли в стиле лофт от компании Rooms.png'
                        alt='Консоль ЛОФТ'
                        fill
                        className='object-cover'
                        placeholderType='product'
                      />
                    </div>

                    {/* Контейнер внизу с текстом "консоли" */}
                    <div className='absolute bottom-0 left-0 flex w-[70%]'>
                      <div className='bg-[#F6F1EB] border-t border-r border-[#403A34] py-4 px-6 flex-1 h-[53.33px] flex items-center'>
                        <span className='mr-2 text-sm'>·</span>
                        <span className='text-sm font-semibold uppercase text-[#403A34]'>
                          КОНСОЛИ
                        </span>
                      </div>
                      <div className='bg-[#403A34] text-white font-medium text-sm uppercase flex items-center justify-center w-[120px] h-[53.33px] border-t border-[#403A34]'>
                        ПОСМОТРЕТЬ
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center py-7 px-4 border-b border-l border-r border-[#403A34] w-[70%] ml-0'>
                    <div className='text-sm font-medium text-[#403A34] uppercase'>
                      ЛОФТ
                    </div>
                    <div className='text-sm font-medium text-[#403A34]'>
                      От 20.000Р
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Блок с категориями товаров (стулья, стеллажи, подстолья) */}
      <div className='w-full bg-[#f4f2ee] py-10'>
        <div className='max-w-[2024px] mx-auto px-0'>
          {/* Заголовок "ВСЕ НАШИ ТОВАРЫ" */}
          <div className='mb-8'>
            <div className='inline-block border border-[#333333] p-4'>
              <div className='flex items-center'>
                <div className='text-center mr-4 ml-4'>·</div>
                <div className='text-[#333333] text-lg uppercase'>
                  ВСЕ НАШИ ТОВАРЫ
                </div>
                <div className='text-center ml-4 mr-4'>·</div>
              </div>
            </div>
          </div>

          {/* Сетка из 3 карточек товаров */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Стулья */}
            <div>
              <div className='border border-[#403A34] w-full h-[433px] relative mb-0'>
                <div className='absolute top-2 left-2 w-2 h-2 bg-[#403A34]'></div>
                <div className='w-full h-full relative'>
                  <SafeImage
                    src='/images/Стулья в стиле лофт от компании Rooms.png'
                    alt='Стулья'
                    fill
                    className='object-cover'
                    placeholderType='product'
                  />
                </div>
                {/* Контейнер внизу с текстом "стулья" */}
                <div className='absolute bottom-0 left-0 flex w-[70%]'>
                  <div className='bg-[#F6F1EB] border-t border-r border-[#403A34] py-4 px-6 flex-1 h-[53.33px] flex items-center'>
                    <span className='mr-2 text-sm'>·</span>
                    <span className='text-sm font-semibold uppercase text-[#403A34]'>
                      СТУЛЬЯ
                    </span>
                  </div>
                  <div className='bg-[#403A34] text-white font-medium text-sm uppercase flex items-center justify-center w-[120px] h-[53.33px] border-t border-[#403A34]'>
                    ПОСМОТРЕТЬ
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center py-7 px-4 border-b border-l border-r border-[#403A34] w-[70%] ml-0'>
                <div className='text-sm font-medium text-[#403A34] uppercase'>
                  ЛОФТ
                </div>
                <div className='text-sm font-medium text-[#403A34]'>
                  От 3.500Р
                </div>
              </div>
            </div>

            {/* Стеллажи */}
            <div>
              <div className='border border-[#403A34] w-full h-[433px] relative mb-0'>
                <div className='absolute top-2 left-2 w-2 h-2 bg-[#403A34]'></div>
                <div className='w-full h-full relative'>
                  <SafeImage
                    src='/images/Стеллажи в стиле лофт от компании Rooms.png'
                    alt='Стеллажи'
                    fill
                    className='object-cover'
                    placeholderType='product'
                  />
                </div>
                {/* Контейнер внизу с текстом "стеллажи" */}
                <div className='absolute bottom-0 left-0 flex w-[70%]'>
                  <div className='bg-[#F6F1EB] border-t border-r border-[#403A34] py-4 px-6 flex-1 h-[53.33px] flex items-center'>
                    <span className='mr-2 text-sm'>·</span>
                    <span className='text-sm font-semibold uppercase text-[#403A34]'>
                      СТЕЛЛАЖИ
                    </span>
                  </div>
                  <div className='bg-[#403A34] text-white font-medium text-sm uppercase flex items-center justify-center w-[120px] h-[53.33px] border-t border-[#403A34]'>
                    ПОСМОТРЕТЬ
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center py-7 px-4 border-b border-l border-r border-[#403A34] w-[70%] ml-0'>
                <div className='text-sm font-medium text-[#403A34] uppercase'>
                  ЛОФТ
                </div>
                <div className='text-sm font-medium text-[#403A34]'>
                  От 20.000Р
                </div>
              </div>
            </div>

            {/* Подстолья */}
            <div>
              <div className='border border-[#403A34] w-full h-[433px] relative mb-0'>
                <div className='absolute top-2 left-2 w-2 h-2 bg-[#403A34]'></div>
                <div className='w-full h-full relative'>
                  <SafeImage
                    src='/images/подстолья в стиле лофт от компании Rooms.png'
                    alt='Подстолья'
                    fill
                    className='object-cover'
                    placeholderType='product'
                  />
                </div>
                {/* Контейнер внизу с текстом "подстолья" */}
                <div className='absolute bottom-0 left-0 flex w-[70%]'>
                  <div className='bg-[#F6F1EB] border-t border-r border-[#403A34] py-4 px-6 flex-1 h-[53.33px] flex items-center'>
                    <span className='mr-2 text-sm'>·</span>
                    <span className='text-sm font-semibold uppercase text-[#403A34]'>
                      ПОДСТОЛЬЯ
                    </span>
                  </div>
                  <div className='bg-[#403A34] text-white font-medium text-sm uppercase flex items-center justify-center w-[120px] h-[53.33px] border-t border-[#403A34]'>
                    ПОСМОТРЕТЬ
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center py-7 px-4 border-b border-l border-r border-[#403A34] w-[70%] ml-0'>
                <div className='text-sm font-medium text-[#403A34] uppercase'>
                  ЛОФТ
                </div>
                <div className='text-sm font-medium text-[#403A34]'>
                  От 6.000Р
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция ПЕРЕРАБОТАННОЕ, КАЧЕСТВО, РУЧНАЯ РАБОТА */}
      <AboutSection />

   
    
    </div>
  );
}
