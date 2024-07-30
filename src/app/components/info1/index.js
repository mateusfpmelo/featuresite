import React from "react"
import styles from './info1.module.css'

const Info1 = () => {


    return(
        <>
            <div className="firstcontent">
                <div className={styles.info1content}>
                    <div className={styles.ctt1}>
                        <h2>Id dolore rerum et eveniet</h2>
                        <p className="p18">Qui aliquid assumenda qui <b>perferendis</b> ullam in rerum minus et dolor officiis rem totam tempore cum eius <b>ratione ea aliquid quia?</b> Ut consequatur voluptatem sit harum minus sit quas dolor vel nobis eveniet ut voluptas quia et voluptatum cumque rem harum dolores? Ut itaque molestiae hic tempora magnam non aliquid deserunt.</p>
                        <button className="bt1">Lorem Ipsum</button>
                    </div>
                    <div className={styles.imgcontent}>
                    </div>
                </div>
            </div>
        </>
    )
}

Info1.displayName = 'Info1'
export default Info1