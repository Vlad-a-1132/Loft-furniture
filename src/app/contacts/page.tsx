import SafeImage from '@/components/common/SafeImage';

export default function ContactsPage() {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8 text-center">Контакты</h1>
        
        {/* Основная информация */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Телефон</h3>
                    <p className="text-gray-700">
                      <a href="tel:+79252119666" className="hover:text-black">+7 925 211-96-66</a>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 16:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@rooms-loft.ru" className="hover:text-black">info@rooms-loft.ru</a>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Мы ответим в течение 24 часов
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Адрес</h3>
                    <p className="text-gray-700">
                      г. Москва, ул. Примерная, д. 123
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Шоурум: Пн-Вс: 10:00 - 20:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Социальные сети</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://t.me/roomsloft" className="text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">
                        Telegram
                      </a>
                      <a href="https://wa.me/79252119666" className="text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                      <a href="https://vk.com/roomsloft" className="text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">
                        VK
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Форма обратной связи */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black text-white font-medium hover:bg-opacity-90 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Карта */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Как нас найти</h2>
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-md">
            <SafeImage 
              src="/images/map.jpg" 
              alt="Карта проезда к ROOMS"
              fill
              className="object-cover"
              placeholderType="map"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <a 
                href="https://yandex.ru/maps/?mode=search&text=Москва" 
                className="px-6 py-3 bg-white font-medium hover:bg-opacity-90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Открыть карту
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 