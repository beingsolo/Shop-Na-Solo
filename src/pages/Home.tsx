import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import NewArrivals from '../components/NewArrivals';

function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
    </div>
  );
}

export default Home;