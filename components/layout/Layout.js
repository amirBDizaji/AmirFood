import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">AmirFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        AmirFood Project &copy;
        <p>
          Developed by &nbsp;
          <a href="https://amirBDizaji.com" target="_blank" rel="noreferrer">
            Amir B. Dizaji
          </a>
          &nbsp; with ❤️
        </p>
      </footer>
    </>
  );
}

export default Layout;
