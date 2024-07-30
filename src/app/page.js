import Image from "next/image"
import styles from "./page.module.css"
import Navbar from "./components/navbar"
import HeaderModule from "./components/header"
import Client from "./components/client"


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeaderModule/>
      <br/>
      <br/>
      <br/>
      <Client />
    </main>
  )
}
