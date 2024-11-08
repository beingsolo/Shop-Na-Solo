import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Nairobi Nights Tee',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500',
    href: '/products/nairobi-nights-tee',
    badge: 'New'
  },
  {
    id: 2,
    name: 'Hakuna Matata Classic',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=500',
    href: '/products/hakuna-matata-classic',
    badge: 'Best Seller'
  },
  {
    id: 3,
    name: 'Safari Vibes',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=500',
    href: '/products/safari-vibes',
    badge: 'Limited Edition'
  },
  {
    id: 4,
    name: 'Kenyan Pride',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=500',
    href: '/products/kenyan-pride',
    badge: 'Popular'
  },
];

function NewArrivals() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">
            Just Arrived
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Vitu Mpya
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Checkout designs zetu mpya zilizoingia wiki hii
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group relative animate-fade-in-up"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative">
                  {product.badge && (
                    <span className="absolute top-2 left-2 z-10 px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300">
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                        <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300">
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link to={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">100% Cotton</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Ksh {product.price.toLocaleString()}
                  </p>
                </div>
                {hoveredProduct === product.id && (
                  <div className="absolute -bottom-4 left-0 right-0 text-center text-sm text-indigo-600 animate-fade-in">
                    Quick View
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;