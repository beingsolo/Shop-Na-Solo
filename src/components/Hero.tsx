import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';

function Hero() {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
          alt="Shop Na Solo Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-indigo-900/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="animate-fade-in-down">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-title">
              Shop Na Solo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Pata T-shirts Safi kwa Bei Poa!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Link
              to="/products"
              className="group inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingBag className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Anza Kununua
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 flex justify-center space-x-6 animate-fade-in-up delay-300">
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="text-gray-300">|</div>
            <div className="font-medium">1000+ Happy Customers</div>
            <div className="text-gray-300">|</div>
            <div className="font-medium">Fast Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;