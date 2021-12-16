// import Image from "next/image";
import styles from "../styles/FoodCard.module.css";
import { getProducts } from "../utils/api";
import { fromImageToUrl } from "../utils/api";
import Link from "next/link";
import { useRouter } from "next/router"


const FoodCard = ({ products, product }) => {

  return (
    <div className={styles.container}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.cardcontainer}>
          <img
            className={styles.image}
            src={fromImageToUrl(product)}
            alt=""
            width="280"
            height="300"
          />
          <h1 className={styles.title}>{product.attributes.title}</h1>
          <span className={styles.price}>
            {product.attributes.price} pak. rupees
          </span>
          <p className={styles.desc}>{product.attributes.description}</p>
          <button className={styles.button}             >Order NOW!</button>
        </div>
      </Link>
    </div>
  );
};

export default FoodCard;
