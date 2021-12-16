import FoodList from "../components/FoodList"
import { getProducts } from "../utils/api"
import { fromImageToUrl } from "../utils/api"
import styles from '../styles/Home.module.css'

const Menu = ({products}) => {
 return (
  <div >


  <FoodList products={products}/>
  
</div>
 )
}

export async function getStaticProps() {
 const products = await getProducts()
 return { props: { products } }
}


export default Menu
