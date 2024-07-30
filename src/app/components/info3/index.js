import React from "react"
import styles from './info3.module.css'

const Info3 = () => {

    
    const content2 = [
        {
            src: '/img/imglogo.png',
            width: 70,
            height: 70,
            title: 'Est nostrum',
            text: 'Aut minima consequatur vel internos natus ea dolore debitis et nisi aspernatur! Et tenetur repellat ut.',
            textButton: 'Aut minima'
        },
        {
            src: '/img/imglogo.png',
            width: 70,
            height: 70,
            title: 'Vestibulum Qui',
            text: 'Minima consequatur vel sit amet. Id velit iure ab omnis tempore qui maiores corporis cum nesciunt obcaecati in dolorem beatae.',
            textButton: 'Minima'
        },
        {
            src: '/img/imglogo.png',
            width: 70,
            height: 70,
            title: 'Omnis Tempore',
            text: 'Beatae ipsum tempore qui maiores corporis. Id velit iure ab omnis dolor sit amet cum nesciunt obcaecati in dolorem beatae.',
            textButton: 'Lorem'
        },
        {
            src: '/img/imglogo.png',
            width: 70,
            height: 70,
            title: 'Dolor Sit',
            text: 'Id velit iure ab omnis tempore qui maiores corporis cum nesciunt obcaecati in dolorem beatae.Lorem ipsum dolor sit amet.',
            textButton: 'Id velit'
        }
    ]

    return(
        <>
            <div className="firstcontent">
                <div className={styles.info3content}>
                    <div className={styles.contentrow1}>
                        <div className={styles.contenttext1}>
                            <h2>Est <span className="color2">nostrum omnis</span> vel quia voluptate</h2>
                            <p>Aut minima consequatur vel <b>internos natus ea dolore debitis et nisi aspernatur!</b> Et tenetur repellat ut culpa doloremque nam explicabo praesentium ea provident autem! Ad cupiditate unde aut quia veritatis a quae impedit. Est magnam rerum et reprehenderit labore non reiciendis eligendi. <b>Non autem nisi aut quis</b> neque id provident voluptatem aut enim mollitia.</p>
                        </div>
                        <div>
                            {content2.slice(0, 1).map((item, index) => (
                                <div key={index} className={styles.contentitem}>
                                    <div>
                                        <img src={item.src} width={item.width} height={item.height} alt={item.title} />
                                        <h3 className="color2">{item.title}</h3>
                                    </div>
                                    <p>{item.text}</p>
                                    <button className="bt2">{item.textButton}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.contentrow2}>
                        {content2.slice(1).map((item, index) => (
                            <div key={index} className={styles.contentitem}>
                                <div>
                                    <img src={item.src} width={item.width} height={item.height} alt={item.title} />
                                    <h3 className="color2">{item.title}</h3>
                                </div>
                                <p>{item.text}</p>
                                <button className="bt2">{item.textButton}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

Info3.displayName = 'Info3'
export default Info3