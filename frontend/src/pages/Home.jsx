import {useEffect,useState} from "react";
import ProductCard from "../components/ProductCard";
function Home(){
 const [products,setProducts]=useState([]);
 useEffect(()=>{
  fetch("http://localhost:5000/api/products")
   .then(r=>r.json()).then(d=>setProducts(d));
 },[]);
 return(
  <div>
   <h1>Cattle Feeds Shop</h1>
   {products.map(p=><ProductCard key={p.id} product={p}/>)}
  </div>
 );
}
export default Home;