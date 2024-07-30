'use client'
import { useState } from 'react'
import styles from './navbar.module.css'
import Image from "next/image"

const Navbar = ({ scrollToRef, lorem, ipsum, dolor, sit }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const itemList = [
    { text: "Lorem", ref: lorem },
    { text: "Ipsum", ref: ipsum },
    { text: "Dolor", ref: dolor },
    { text: "Sit", ref: sit }
  ]

  return (
    <>
      <nav className={styles.customnavbar}>
        <div className={styles.cstnvbitem}>
          <div className={styles.cstimgbtfmb}>
            <Image src={'/img/marca/logo.png'} alt='Logo' height={70}  width={70}/>
            {isOpen ? <Image src={'/img/icons/menu/menuopen.png'} alt={'Ícone x para fechar'} className={styles.imgocmnclose} onClick={toggle} height={30}  width={30}/> : <Image src={'/img/icons/menu/menuclose.png'} alt={'Ícone para abrir'} className={styles.imgocmnopen} onClick={toggle} height={30}  width={30}/>}
          </div>
          
          <div className={styles.mtrcstnv}>
            <ul className={styles.cstnvbir}>
              {itemList.map((item, index) => (
                <li key={index}>
                  <div className={styles.navlink} onClick={() => scrollToRef(item.ref, 100)}>{item.text}</div>
                </li>
              ))}
            </ul>
            <button className='bt1'>Lorem</button>
          </div>

          {isOpen && <>
            <div className={styles.mtrcstmb}>
              <ul className={styles.cstnvhmb}>
                {itemList.map((item, index) => (
                  <li key={index}>
                    <div className={styles.navlink} onClick={() => { scrollToRef(item.ref, 100); toggle(); }}>{item.text}</div>
                  </li>
                ))}
              </ul>
              <div className={styles.divfbpc}>
                <button className='bt1'>Lorem</button>
              </div>
            </div>
          </>}
        </div>
      </nav>
    </>
  )
}

Navbar.displayName = 'Navbar'
export default Navbar
