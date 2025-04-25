import SafeImage from '@/components/common/SafeImage';

export default function DeliveryPage() {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8 text-center">Доставка и оплата</h1>
        
        {/* Информация о доставке */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Доставка</h2>
              <p className="text-gray-700 mb-4">
                Мы доставляем нашу мебель по всей России. Стоимость и сроки доставки зависят от региона и выбранного способа доставки.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Доставка по Москве:</strong> от 1000₽ в зависимости от района и габаритов изделия.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Доставка по Московской области:</strong> от 1500₽ в зависимости от удаленности и габаритов изделия.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Доставка по России:</strong> рассчитывается индивидуально. Мы сотрудничаем с надежными транспортными компаниями: СДЭК, Деловые Линии, ПЭК.
              </p>
              <p className="text-gray-700">
                Точную стоимость и сроки доставки вы можете узнать у наших менеджеров после оформления заказа.
              </p>
            </div>
            <div className="relative h-96 w-full">
              <SafeImage 
                src="/images/delivery.jpg" 
                alt="Доставка мебели ROOMS"
                fill
                className="object-cover rounded-lg"
                placeholderType="category"
              />
            </div>
          </div>
        </section>
        
        {/* Информация об оплате */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 w-full">
              <SafeImage 
                src="/images/payment.jpg" 
                alt="Оплата ROOMS"
                fill
                className="object-cover rounded-lg"
                placeholderType="category"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-4">Оплата</h2>
              <p className="text-gray-700 mb-4">
                Мы предлагаем несколько удобных способов оплаты заказа:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Наличными при получении</li>
                <li>Банковской картой онлайн (Visa, MasterCard, МИР)</li>
                <li>Банковской картой при получении</li>
                <li>Банковским переводом по счету (для юридических лиц)</li>
                <li>Онлайн через систему быстрых платежей (СБП)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Для подтверждения заказа требуется предоплата в размере 50% от стоимости изделия.
              </p>
              <p className="text-gray-700">
                Оплата производится только после подтверждения заказа менеджером и уточнения всех деталей.
              </p>
            </div>
          </div>
        </section>
        
        {/* Дополнительные услуги */}
        <section>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Дополнительные услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Сборка</h3>
                <p className="text-gray-700 text-center">
                  Профессиональная сборка мебели нашими специалистами. Стоимость: от 10% от цены изделия.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Гарантия</h3>
                <p className="text-gray-700 text-center">
                  На всю мебель предоставляется гарантия 50 лет с момента покупки.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Индивидуальный заказ</h3>
                <p className="text-gray-700 text-center">
                  Изготовление мебели по индивидуальным размерам и дизайну.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 