import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/Login/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flash Admin Dashboard</title>
        <meta name="description" content="Manage Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login/>
      </main>
    </div>
  )
}
