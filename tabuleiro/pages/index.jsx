import Head from 'next/head'
import Image from 'next/image'
import Subdivisao from '../componentes/Subdivisao'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Subdivisao />
    </div>
  )
}
