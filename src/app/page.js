import Image from "next/image"
import styles from "./page.module.css"
import Navbar from "./components/navbar"
import HeaderModule from "./components/header"
import Client from "./components/client"
import Info1 from "./components/info1"
import Info2 from "./components/info2"
import InfoNumber from "./components/infonumber"
import Info3 from "./components/info3"
import Info4 from "./components/info4"
import Comment from "./components/comment"
import FooterModule from "./components/footer"


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeaderModule/>
      <Client />
      <Info2 />
      <Info1 />
      <InfoNumber />
      <Info3 />
      <Info4 />
      <Comment />
      <FooterModule />
    </main>
  )
}
