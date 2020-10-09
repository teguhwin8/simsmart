import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Dashboard - Simsmart</title>
        </Head>
        <h1>Ini adalah halaman dashboard</h1>
      </div>
    </Layout>
  )
}
