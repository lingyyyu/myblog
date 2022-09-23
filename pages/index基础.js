import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const handle = () => {
    router.push('clients')
  }
  return (
    <div className={styles.container}>
      <h1>Hello Next World</h1>
      <ul>
        <li>
          <Link href={'/prot/hello'}>hello</Link>
        </li>
        <li>
          <Link href={'/clients'}>clients</Link>
        </li>
        <li>
          <button onClick={handle}>编程式导航</button>
        </li>
      </ul>
    </div>
  )
}
