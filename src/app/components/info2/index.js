import React from "react"
import styles from './info2.module.css'

const Info2 = () => {

    const content = [
        {
            title: 'Sed',
            text: 'Lorem ipsum dolor sit amet. Id velit iure ab omnis tempore qui maiores corporis cum nesciunt obcaecati in dolorem beatae.'
        },
        {
            title: 'Vestibulum',
            text: 'Lorem ipsum dolor sit amet. Id velit iure ab omnis tempore qui maiores corporis cum nesciunt obcaecati in dolorem beatae.'
        },
        {
            title: 'Praesent',
            text: 'Lorem ipsum dolor sit amet. Id velit iure ab omnis tempore qui maiores corporis cum nesciunt obcaecati in dolorem beatae.'
        },
        {
            title: 'Nullam',
            text: 'Lorem ipsum dolor sit amet. Id velit iure ab omnis tempore qui maiores corporis cum nesciunt obcaecati in dolorem beatae.'
        },
        {
            title: 'Aenean',
            text: 'Lorem ipsum dolor sit amet. Id velit iure ab omnis tempore qui maiores corporis cum nesciunt obcaecati in dolorem beatae.'
        }
    ]

    return (
        <> 
            <div className="firstcontent">
                <div className={styles.content1}>
                    <div className={styles.textcontent}>
                        <h2>Sit iure quae et omnis</h2>
                        <p className="p18">Sed harum atque est dolorum expedita eum <b>quidem saepe ut dolorum debitis sit sequi amet.</b> Quo asperiores maxime aut molestias galisum eos excepturi.</p>
                    </div>
                    <div className={styles.contentlist}>
                        {content.map((item, index) => (
                            <div key={index} className={styles.ctitem}>
                                <h4>{item.title}</h4>
                                <p className="p18">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

Info2.displayName = 'Info2'
export default Info2
