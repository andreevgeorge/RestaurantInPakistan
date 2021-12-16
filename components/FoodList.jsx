import Image from "next/image";
import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";
import Link from "next/link";

const FoodList = ({ products, product }) => {
  // console.log(products.data);


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST DESI FOOD IN TOWN</h1>
      <div className={styles.wrapper}>
        {products.data.map((product) => (
          <FoodCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
