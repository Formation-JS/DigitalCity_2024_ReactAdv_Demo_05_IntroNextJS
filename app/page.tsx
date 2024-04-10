import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Demo NextJS</h1>

      <h3><Link href='/movie'>Film !</Link></h3>
      <h3><Link href='/counter'>Counter !</Link></h3>
    </main>
  );
}
