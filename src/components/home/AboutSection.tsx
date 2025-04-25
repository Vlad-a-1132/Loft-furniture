'use client';

import { useState, useEffect, useRef } from 'react';
import SafeImage from '@/components/common/SafeImage';

// Типы данных для секций
type SectionType = 'hotels' | 'office' | 'home';

// Данные для каждой секции
const sectionData = {
  hotels: {
    title: 'МЕБЕЛЬ ДЛЯ ОТЕЛЕЙ',
    image: '/images/oteli.png',
    text: [
      'Создаем уникальную мебель для гостиниц и отелей любого уровня. Наши решения сочетают в себе комфорт, долговечность и стильный дизайн.',
      'Индивидуальный подход к каждому проекту позволяет нам создавать мебель, которая идеально вписывается в концепцию вашего отеля.',
      'Мы предоставляем гарантию на всю нашу продукцию сроком на 1 год. При заказе от 500,000 рублей - бесплатная доставка по всей России.',
      'Для крупных заказов - подарок на выбор: встроенный сейф или мини-холодильник для каждого номера. Создайте неповторимую атмосферу вашего отеля вместе с нами!'
    ],
    ticker: [
      'Комфорт для гостей',
      'Долговечные материалы',
      'Уникальный дизайн',
      'Индивидуальные решения',
      'Гарантия 1 год',
      'Бесплатная доставка'
    ]
  },
  office: {
    title: 'МЕБЕЛЬ ДЛЯ ОФИСА',
    image: '/images/офисная мебель от компании rooms.jpg',
    text: [
      'Функциональная и эргономичная офисная мебель, которая создает комфортную рабочую среду и повышает продуктивность.',
      'Мы учитываем все аспекты современного офисного пространства, создавая мебель, которая служит долгие годы.',
      'На всю офисную мебель предоставляется расширенная гарантия 1 год с возможностью продления. При комплексном заказе от 1,000,000 рублей - доставка и сборка бесплатно.',
      'В качестве подарка для корпоративных клиентов - встроенные сейфы для документов или мини-холодильники для зоны отдыха. Создайте идеальное рабочее пространство с нашей мебелью!'
    ],
    ticker: [
      'Эргономичный дизайн',
      'Функциональность',
      'Современные решения',
      'Комфорт для работы',
      'Гарантия 1 год',
      'Бесплатная сборка'
    ]
  },
  home: {
    title: 'МЕБЕЛЬ ДЛЯ ДОМА',
    image: '/images/Group-5-1.png',
    text: [
      'Стильная и качественная мебель для вашего дома, которая создает уют и комфорт в каждой комнате.',
      'Мы создаем мебель, которая становится частью вашей жизни, сочетая в себе красоту и практичность.',
      'Каждое изделие проходит тщательный контроль качества и имеет гарантию 1 год. При покупке комплектов мебели - бесплатная доставка до двери.',
      'В качестве подарка к крупным заказам - встроенный сейф для ценностей или компактный холодильник для гостиной или спальни. Превратите ваш дом в место, куда хочется возвращаться!'
    ],
    ticker: [
      'Уютные решения',
      'Качественные материалы',
      'Стильный дизайн',
      'Практичность',
      'Гарантия 1 год',
      'Подарки к заказу'
    ]
  }
};

export default function AboutSection() {
  const [activeSection, setActiveSection] = useState<SectionType>('hotels');
  const tickerRef = useRef<HTMLDivElement>(null);

  // Функция для смены активной секции
  const showSection = (section: SectionType) => {
    console.log('Changing section to:', section);
    console.log('Image will be:', sectionData[section].image);
    setActiveSection(section);
  };

  // Добавляем эффект для отслеживания изменений activeSection
  useEffect(() => {
    console.log('Active section changed to:', activeSection);
    console.log('Current image path:', sectionData[activeSection].image);
  }, [activeSection]);

  // Эффект для анимации бегущей строки
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }
        .ticker-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return (
    <div className='w-full bg-[#f3f0ec] my-16'>
      <div className='max-w-[2024px] mx-auto px-0'>
        <div className='flex flex-col lg:flex-row h-[1020.31px] border border-[#403A34]'>
          {/* Левая часть с текстом (55%) */}
          <div className='lg:w-[55%] py-16 flex flex-col border-r border-[#403A34]'>
            <div className='flex-1 flex mb-24'>
              {/* Левая колонка с заголовками */}
              <div className='w-1/2 pl-[64px]'>
                {Object.entries(sectionData).map(([key, data]) => (
                  <h2
                    key={key}
                    onClick={() => showSection(key as SectionType)}
                    className={`text-[4.25rem] leading-[4.5rem] font-[900] cursor-pointer transition-colors duration-300 mb-8 ${
                      activeSection === key ? 'text-[#3c3a36]' : 'text-[#c9c5be] hover:text-[#3c3a36]'
                    }`}
                  >
                    {data.title}
                  </h2>
                ))}
              </div>
              
              {/* Правая колонка с текстом */}
              <div className='w-1/2 pl-4 pr-[64px]'>
                <div className='mb-8'>
                  {sectionData[activeSection].text.map((paragraph, index) => (
                    <p key={index} className='text-[#3c3a36] text-lg mb-4'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Кнопка О НАС по центру */}
            <div className='flex justify-center items-center w-full mb-20 '>
              <div className='border border-[#403A34] p-4 w-full'>
                <div className='flex items-center justify-center'>
                  <div className='text-center mr-4'>·</div>
                  <div className='text-[#403A34] text-lg uppercase'>О НАС</div>
                  <div className='text-center ml-4'>·</div>
                </div>
              </div>
            </div>

            {/* Бегущая строка внизу */}
            <div className='w-full' style={{ height: '290px', position: 'relative', bottom: 0 }}>
              <div className='ticker-wrapper h-full px-[64px]'>
                <div className='whitespace-nowrap animate-marquee' ref={tickerRef} style={{ paddingTop: '54px', paddingBottom: '34px' }}>
                  {[...sectionData[activeSection].ticker, ...sectionData[activeSection].ticker].map((text, index) => (
                    <span key={index} className='text-[#3c3a36] text-[12.875rem] leading-[2.25rem] font-bold uppercase mr-8 inline-block'>
                      • {text} •
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть с изображением (45%) */}
          <div className='lg:w-[45%] relative'>
            <div className='w-full h-full relative bg-[#ddd]'>
              <div className='absolute top-2 right-2 w-2 h-2 bg-[#403A34]'></div>
              <SafeImage
                src={sectionData[activeSection].image}
                alt={sectionData[activeSection].title}
                fill
                className='object-cover'
                placeholderType='product'
                key={`image-${activeSection}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 