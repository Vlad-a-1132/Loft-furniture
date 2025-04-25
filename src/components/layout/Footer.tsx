'use client';

import Link from 'next/link';

// Компонент футера сайта
export default function Footer() {
  return (
    <footer className="bg-white w-full border border-[#403A34]">
      {/* Верхняя часть футера с логотипом и описанием */}
      <div className="w-full px-4 py-12 border-b border-[#403A34] relative">
        {/* Точки в углах */}
        <div className="absolute left-0 top-0 w-2 h-2 bg-[#403A34]"></div>
        <div className="absolute right-0 top-0 w-2 h-2 bg-[#403A34]"></div>
        
        <div className="flex flex-col items-center justify-center">
          {/* Логотип K */}
          <div className="mb-6">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path d="M40 0L35 10H45L40 0Z" fill="#403A34"/>
              <text x="40" y="25" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#403A34">oskame</text>
            </svg>
          </div>
          
          {/* Текстовое описание */}
          <h3 className="text-[#403A34] text-lg uppercase text-center font-normal mb-10">
            УНИКАЛЬНАЯ, ЭКОЛОГИЧНАЯ МЕБЕЛЬ РУЧНОЙ РАБОТЫ
          </h3>
          
          {/* Контактная информация */}
          <div className="text-[#403A34] text-sm text-center uppercase">
            TELEGRAM, WHATSAPP, VK, +7 925 211-96-66
          </div>
        </div>
      </div>
      
      {/* Секция навигации */}
      <div className="w-full">
        <div className="grid grid-cols-2 border-b border-[#403A34]">
          <div className="py-4 text-center border-r border-[#403A34] text-[#403A34]">
            <Link href="/about" className="block py-3 hover:bg-gray-50 transition-colors uppercase">
              О НАС
            </Link>
          </div>
          <div className="py-4 text-center text-[#403A34]">
            <Link href="/products" className="block py-3 hover:bg-gray-50 transition-colors uppercase">
              ПРОДУКТЫ
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 border-b border-[#403A34]">
          <div className="py-4 text-center border-r border-[#403A34] text-[#403A34]">
            <Link href="/collection" className="block py-3 hover:bg-gray-50 transition-colors uppercase">
              КОЛЛЕКЦИЯ
            </Link>
          </div>
          <div className="py-4 text-center text-[#403A34]">
            <Link href="/contacts" className="block py-3 hover:bg-gray-50 transition-colors uppercase">
              КОНТАКТЫ
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-3 border-b border-[#403A34]">
          <div className="py-4 text-center border-r border-[#403A34] text-[#403A34]">
            <Link href="/faq" className="block py-3 hover:bg-gray-50 transition-colors uppercase">
              FAQ
            </Link>
          </div>
          <div className="py-4 text-center border-r border-[#403A34] text-[#403A34]">
            <Link href="/delivery" className="block py-3 hover:bg-gray-50 transition-colors uppercase">
              ДОСТАВКА & ВОЗВРАТ ТОВАРА
            </Link>
          </div>
          <div className="py-4 text-center text-[#403A34]">
            <Link href="/gtc" className="block py-3 hover:bg-gray-50 transition-colors uppercase">
              GTC
            </Link>
          </div>
        </div>
      </div>
      
      {/* Нижняя часть футера с ROOMS */}
      <div className="py-16 px-4 relative">
        {/* Точки в углах */}
        <div className="absolute left-0 bottom-0 w-2 h-2 bg-[#403A34]"></div>
        <div className="absolute right-0 bottom-0 w-2 h-2 bg-[#403A34]"></div>
        
        <div className="max-w-[1400px] mx-auto">
          {/* Большой текст ROOMS */}
          <div className="text-[#403A34] text-9xl sm:text-[12rem] md:text-[16rem] font-bold leading-none text-center mb-12">
            ROOMS
          </div>
          
          {/* Нижняя секция с ссылками */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <Link href="https://rooms-loft.ru/index.html" className="text-[#403A34] text-xs">
                https://rooms-loft.ru/index.html
              </Link>
            </div>
            <div className="text-[#403A34] text-xs uppercase text-right mt-4 md:mt-0">
              <div className="mb-1">MY ACCOUNT</div>
              <div className="mb-1">LEGALS</div>
              <div>CREDITS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 