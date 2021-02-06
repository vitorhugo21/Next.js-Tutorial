import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div className={styles.title}>
        <h1>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem molestias id, iure adipisci tempora dolore culpa sed impedit temporibus quam veniam, dolorem magnam ea non officiis necessitatibus cupiditate itaque!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui sequi saepe minus illum fugit exercitationem repellat numquam facere, harum ratione corrupti officiis, totam quaerat? Cum ipsum mollitia nisi natus!</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  );
}
