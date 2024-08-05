import React from "react"
import styles from './header.module.css'

const HeaderModule = () => {


    return(
        <>
            <header className="firstcontent bgforheader">
                <div className={styles.header}>
                    <h1>Lorem Ipsum Lorem</h1>
                    <p className="p18">33 asperiores asperiores non molestiae voluptas aut molestias reiciendis et dicta fugit. Est totam sint et omnis repellat At adipisci blanditiis eum numquam cumque? Est velit impedit eos nihil sequi et nihil iusto.</p>
                    <button className="bt1">Lorem Ipsum</button>
                </div>
            </header>
        </>
    )
}

HeaderModule.displayName = 'HeaderModule'
export default HeaderModule