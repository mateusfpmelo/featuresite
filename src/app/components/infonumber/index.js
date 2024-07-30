import React from "react"
import styles from './infonumber.module.css'

const InfoNumber = () => {


    return(
        <>
            <div className="firstcontent">
                <div className={styles.numbercontent}>
                    <div className={styles.contenttext}>
                        <h2>Est vel omnis nostrum quia voluptate</h2>
                    </div>
                    <div className={styles.cttnumber}>
                        <div>
                            <p className={styles.titlefocus}>3k</p>
                            <p className={styles.textfocus}>Expedita eum</p>
                        </div>
                        <div>
                            <p className={styles.titlefocus}>1,4k</p>
                            <p className={styles.textfocus}>Maximet dolorum</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

InfoNumber.displayName = 'InfoNumber'
export default InfoNumber