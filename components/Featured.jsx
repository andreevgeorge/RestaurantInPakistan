import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = ["/img/featured.jpg"];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {/* {images.map((img, i) => (
            <Image src={img} key={i} width="2000" height="1200" alt="" />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
