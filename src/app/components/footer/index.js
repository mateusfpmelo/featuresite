import React from "react"
import styles from './footer.module.css'
import Image from "next/image"

const FooterModule = () => {

    const itemList = [
        { text: "Lorem" },
        { text: "Ipsum" },
        { text: "Dolor" },
        { text: "Sit" }
    ]
    
    return(
        <>
            <div className="firstcontent bgblack">
                <div className={styles.footer}>
                    <br/>
                    <div className={styles.contentfooter}>
                        <Image src={'/img/marca/logo.png'} alt='Logo' height={70}  width={70}/>
                        {itemList.map((item, index)=> (
                            <div key={index} className={styles.footermap}>{item.text}</div>
                        ))}
                    </div>
                    <p className="p14">©️ 2024 Est magnam. Todos os direitos reservados</p>
                    <br/>
                </div>
            </div>
        </>
    )
}

FooterModule.displayName = 'FooterModule'
export default FooterModule