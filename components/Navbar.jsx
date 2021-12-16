import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/phone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <Link href="https://wa.me/79200000000">
            <div className={styles.text}>Order now</div>
          </Link>
          <div className={styles.text}>555-0-555</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Image
            className={styles.logo}
            src="/img/Logo.png"
            alt=""
            width="80"
            height="80"
          />
          <Link href="/menu">
            <li className={styles.listItem}>Products</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart">
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="50" height="50" />
            <div className={styles.counter}>3</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
