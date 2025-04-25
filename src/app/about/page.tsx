import SafeImage from '@/components/common/SafeImage';

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8 text-center">О нас</h1>
        
        {/* Раздел "Кто мы такие" */}
        <section id="about" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Кто мы такие?</h2>
              <p className="text-gray-700 mb-4">
                Rooms — компания, занимающаяся производством мебели в стиле лофт. Мы активно развиваемся и применяем все современные технологии в процессе производства.
              </p>
              <p className="text-gray-700 mb-4">
                Наша миссия — предоставить нашим клиентам возможность выразить свою индивидуальность через дизайн пространства, используя нашу мебель как основу для создания стильного и уютного дома или офиса.
              </p>
              <p className="text-gray-700">
                В нашем ассортименте вы найдёте различные виды мебели: от столов и стульев до кроватей и шкафов. Мы можем изготовить изделия из различных материалов в зависимости от ваших предпочтений. Если вы ищете качественную мебель в стиле лофт, Rooms — ваш выбор!
              </p>
            </div>
            <div className="relative h-96 w-full">
              <SafeImage 
                src="/images/workshop.jpg" 
                alt="Мастерская ROOMS"
                fill
                className="object-cover rounded-lg"
                placeholderType="category"
              />
            </div>
          </div>
        </section>
        
        {/* Раздел "Наши преимущества" */}
        <section id="advantages" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 w-full">
              <SafeImage 
                src="/images/production.jpg" 
                alt="Производство ROOMS"
                fill
                className="object-cover rounded-lg"
                placeholderType="category"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-4">Наши преимущества</h2>
              <p className="text-gray-700 mb-4">
                Наш магазин имеет собственное производство. Мы сами изготавливаем мебель в стиле лофт - практичную, удобную и универсальную.
              </p>
              <p className="text-gray-700 mb-4">
                Наш ассортимент подобран так, что вы можете комбинировать изделия в своем доме, создавая тот интерьер, который вам по душе! Мы стараемся следовать трендам, поэтому в нашем каталоге присутствует мебель в разных современных стилях.
              </p>
              <p className="text-gray-700">
                Наш интернет-магазин - это не только про мебель в стиле лофт. Это про комфорт, простор и продуманный интерьер вашего дома.
              </p>
            </div>
          </div>
        </section>
        
        {/* Раздел "Гарантия и возврат" */}
        <section id="warranty" className="mb-16">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Гарантия и возврат</h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-700 mb-6">
                ГАРАНТИЯ 50 ЛЕТ, начиная с даты поставки. Мы гарантируем, что вся мебель не будет содержать дефектных материалов и изготовления. Если в течение гарантийного срока изделие будет признано бракованным из-за производственного дефекта, мы отремонтируем или заменим дефектную деталь (детали). Данная гарантия покрывает все расходы по замене или ремонту. Для натуральных материалов, таких как массив дерева, наличие естественных дефектов, трещин или рубцов на дереве не считается производственным дефектом.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Возврат</h3>
              <p className="text-gray-700">
                У нас действует 30-дневная политика возврата, что означает, что у вас есть 30 дней после получения вашего товара, чтобы запросить возврат. Чтобы иметь право на возврат, ваш товар должен быть в том же состоянии, в каком вы его получили, с оригинальной упаковкой или без нее. Вам также понадобится квитанция или подтверждение покупки.
              </p>
            </div>
          </div>
        </section>
        
        {/* Команда */}
        <section id="team">
          <h2 className="text-2xl font-bold mb-8 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg bg-gray-200">
                  <SafeImage 
                    src={`/images/team-${member}.jpg`} 
                    alt={`Член команды ${member}`}
                    fill
                    className="object-cover"
                    placeholderType="team"
                  />
                </div>
                <h3 className="text-lg font-semibold">Имя Фамилия</h3>
                <p className="text-gray-600">Должность</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 