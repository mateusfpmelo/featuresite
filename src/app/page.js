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
      <br/>
      <Client />
      <br/>
      <Info2 />
      <br/>
      <Info1 />
      <br/>
      <InfoNumber />
      <br/>
      <Info3 />
      <br/>
      <Info4 />
      <br/>
      <Comment />
      <br/>
      <FooterModule />
    </main>
  )
}
