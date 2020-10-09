import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  return (
    <div>
      {/* Head */}
      <Head>
        <title>Simsmart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Left Sidebar */}
      <Sidebar />

      {/* Content */}
      <main className={Styles.container}>
        {children}
      </main>
    </div>
  )
}