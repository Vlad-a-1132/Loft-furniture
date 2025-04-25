import Link from 'next/link';

// Компонент футера сайта
export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-[1920px] mx-auto border-l border-r border-[#403A34] px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О нас */}
          <div>
            <h3 className="text-lg font-semibold mb-4">О нас</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  Кто мы такие?
                </Link>
              </li>
              <li>
                <Link href="/about#advantages" className="text-gray-600 hover:text-black">
                  Наши преимущества
                </Link>
              </li>
              <li>
                <Link href="/about#warranty" className="text-gray-600 hover:text-black">
                  Гарантия и возврат
                </Link>
              </li>
            </ul>
          </div>

          {/* Наши товары */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Наши товары</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/sofas" className="text-gray-600 hover:text-black">
                  Кресла и диваны
                </Link>
              </li>
              <li>
                <Link href="/products/tables/coffee" className="text-gray-600 hover:text-black">
                  Журнальные столики
                </Link>
              </li>
              <li>
                <Link href="/products/tables/dining" className="text-gray-600 hover:text-black">
                  Обеденные столы
                </Link>
              </li>
              <li>
                <Link href="/products/other" className="text-gray-600 hover:text-black">
                  Другая мебель
                </Link>
              </li>
              <li>
                <Link href="/products/consoles" className="text-gray-600 hover:text-black">
                  Консоли
                </Link>
              </li>
              <li>
                <Link href="/products/bases" className="text-gray-600 hover:text-black">
                  Подстолья
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Для любого другого запроса</h3>
            <p className="text-gray-600 mb-4">Персональный проект или конкретный запрос</p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Имя *" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Адрес" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Сообщение *" 
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-6 py-2 bg-black text-white hover:bg-opacity-90 transition-all"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">Уникальная, экологичная мебель ручной работы</p>
              <div className="mt-2 flex space-x-4">
                <a href="https://t.me/roomsloft" className="text-gray-600 hover:text-black" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
                <a href="https://wa.me/79252119666" className="text-gray-600 hover:text-black" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href="https://vk.com/roomsloft" className="text-gray-600 hover:text-black" target="_blank" rel="noopener noreferrer">
                  VK
                </a>
                <a href="tel:+79252119666" className="text-gray-600 hover:text-black">
                  +7 925 211-96-66
                </a>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-600 hover:text-black text-sm">
                О нас
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-black text-sm">
                Продукты
              </Link>
              <Link href="/collection" className="text-gray-600 hover:text-black text-sm">
                Коллекция
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-black text-sm">
                Контакты
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} ROOMS. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
} 