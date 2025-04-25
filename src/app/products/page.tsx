import Link from 'next/link';
import SafeImage from '@/components/common/SafeImage';

// Интерфейс для категории товаров
interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProductsPage() {
  // Временные данные для категорий товаров
  const productCategories: ProductCategory[] = [
    {
      id: 'shelves',
      title: 'Стеллажи',
      description: 'Функциональные и стильные стеллажи в стиле лофт',
      image: '/images/shelves.jpg',
      link: '/products/shelves'
    },
    {
      id: 'sofas',
      title: 'Кресла и диваны',
      description: 'Уютные кресла и диваны для вашего интерьера',
      image: '/images/sofas.jpg',
      link: '/products/sofas'
    },
    {
      id: 'cabinets',
      title: 'Шкафы и тумбы',
      description: 'Вместительные шкафы и тумбы в стиле лофт',
      image: '/images/cabinets.jpg',
      link: '/products/cabinets'
    },
    {
      id: 'office',
      title: 'Офисная мебель',
      description: 'Мебель для комфортной работы в офисе',
      image: '/images/office.jpg',
      link: '/products/office'
    },
    {
      id: 'home',
      title: 'Мебель для дома',
      description: 'Разнообразная мебель для любых помещений',
      image: '/images/home.jpg',
      link: '/products/home'
    },
    {
      id: 'tables',
      title: 'Столы',
      description: 'Обеденные, журнальные и рабочие столы в стиле лофт',
      image: '/images/tables.jpg',
      link: '/products/tables'
    }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden border border-gray-200">
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <SafeImage 
                  src={category.image} 
                  alt={category.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  placeholderType="category"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  href={category.link}
                  className="inline-block px-4 py-2 bg-black text-white hover:bg-opacity-90 transition-all"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 