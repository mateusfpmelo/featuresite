import Image from "next/image"
import styles from "./page.module.css"
import Navbar from "./components/navbar"
import HeaderModule from "./components/header"
import Client from "./components/client"
import Info1 from "./components/info1"
import Info2 from "./components/info2"


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeaderModule/>
      <br/>
      <br/>
      <Client />
      <br/>
      <Info2 />
      <br/>
      <br/>
      <Info1 />
      <br/>
      <br/>
    </main>
  )
}
