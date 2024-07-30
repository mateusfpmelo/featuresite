import React from "react"
import styles from './comment.module.css'

const Comment = () => {

    const comments = [
        {
            person:'Aut minima',
            comment: '“Aut minima consequatur vel internos natus ea dolore debitis et nisi aspernatur! Et tenetur repellat ut nam explicabo praesentium!”'
        },
        {
            person:'Doloremque',
            comment: '“Ad cupiditate unde aut quia veritatis a quae impedit. Est magnam rerum et reprehenderit.'
        },
        {
            person:'rerum et',
            comment: '“Est magnam rerum et reprehenderit. labore non reiciendis eligendi. Non autem nisi aut quis neque id  aut enim mollitia.”'
        }
    ]

    return(
        <>
            <div className="firstcontent">
                <div className={styles.commentcontent}>
                    <div className={styles.cmttext}>
                        <h3>Est voluptate <span className="color2">omnis nostrum</span></h3>
                        <div className={styles.showcomment}>
                            {comments.map((item, index) => (
                                <div key={index} className={styles.showcard}>
                                    <p className="p16">{item.comment}</p>
                                    <p className="p14 color2"><b>{item.person}</b></p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.commentimg}>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

Comment.displayName='Comment'
export default Comment