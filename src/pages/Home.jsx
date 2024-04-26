import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1-deae5a1f.webp';
import hero2 from '../assets/hero2-2271e3ad.webp';
import hero3 from '../assets/hero3-a83f0357.webp';
import hero4 from '../assets/hero4-4b9de90e.webp';
import Card from '../components/Card';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then(res => res.json())
      .then(data => {setFeatured(data.data)})
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="align-element py-20">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">We are changing the way people shop</h1>
          <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          <div className="mt-10"><Link className="btn btn-primary uppercase" to="/products">Our Products</Link></div>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img src={hero1} width={320} height={416} className="rounded-box object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero2} width={320} height={416} className="rounded-box object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero3} width={320} height={416} className="rounded-box object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero4} width={320} height={416} className="rounded-box object-cover" />
          </div>
        </div>
        <div className="pt-24">


        </div>
      </div>
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">featured products</h2>
      </div>
        <div className="featured-wrapper flex justify-between mt-4 gap-4 mb-20">
          {
            loading && <span className="loading loading-ring loading-lg block mx-auto mt-20"></span>
          }
          {
            !loading && featured.length > 0 && featured.map((el, index) => {
              return (<Card key={index} data = {el}></Card>);
            })
          }
        
        </div>
      </div>
  );
}

export default Home;
