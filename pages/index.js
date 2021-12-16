import Image from "next/image";
import Featured from "../components/Featured";
import FoodList from "../components/FoodList";
import styles from "../styles/Home.module.css";
import { getProducts } from "../utils/api";
import { fromImageToUrl } from "../utils/api";

export default function Home({ products, product }) {
  return (
    <div className={styles.container}>

      <Featured />
      <FoodList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
