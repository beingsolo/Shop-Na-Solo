import { Link } from 'react-router-dom';
import { Shirt, Star, Heart } from 'lucide-react';

const categories = [
  {
    name: 'Made in Kenya',
    description: 'Vitu Vyetu, Ubora Wetu',
    icon: Star,
    color: 'bg-red-500',
    href: '/products/made-in-kenya',
    count: '50+ Items'
  },
  {
    name: 'Trendy Sheng',
    description: 'Designs za Mtaa',
    icon: Shirt,
    color: 'bg-green-500',
    href: '/products/trendy-sheng',
    count: '30+ Items'
  },
  {
    name: 'Patriot Collection',
    description: 'Penda Kenya Yetu',
    icon: Heart,
    color: 'bg-yellow-500',
    href: '/products/patriot',
    count: '25+ Items'
  },
];

function FeaturedCategories() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">
            Explore Categories
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Vitenge Vyetu
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Chagua category yako upate designs tofauti tofauti
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.href}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-80 bg-white">
                  <div className={`absolute inset-0 ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <category.icon className={`h-24 w-24 ${category.color.replace('bg-', 'text-')} opacity-80`} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                    <span className="text-sm text-indigo-600 font-medium">{category.count}</span>
                  </div>
                  <p className="text-base text-gray-500">{category.description}</p>
                  <div className="mt-4 flex items-center text-indigo-600 group-hover:text-indigo-700">
                    <span className="text-sm font-medium">Browse Collection</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;