import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import { getProducts, getProduct } from "../../utils/api";



const Product = ({ product, products }) => {
  console.log(product.data.id);
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img
            className={styles.image}
            src={fromBigImageToUrl(product)}
            alt=""
            width="500"
            height="600"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.data.attributes.title}</h1>
        <span className={styles.price}>${product.data.attributes.price}</span>
        <p className={styles.desc}>{product.data.attributes.description}</p>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}   >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;



export async function getStaticProps(context) {
 const product = await getProduct(context.params.id);
 return { props: { product } };
}

export async function getStaticPaths() {
 const products = await getProducts();
 return {
   paths: products.data.map((product) => {
     return {
       params: { id: product.id.toString() },
     };
   }),
   fallback: true,
 };
}

export const fromBigImageToUrl = (product, image) => {
 return `http://localhost:1337${product.data.attributes.image.data[0].attributes.url}`;
};
