import { useEffect, useState } from "react";
import CardGrid from "../components/CardGrid";
import Hero from "../components/Hero";
import { featureData } from "../data/features";
import getData from "../api/getData";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await getData();
        setProducts(data);
      } catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[])

  return (
    <section>
      <Hero />
      <CardGrid features={featureData} />
      <CardGrid features={products} />
    </section>
  );
}
export default Home;
