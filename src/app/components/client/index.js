import React from "react"
import styles from './client.module.css'
import Image from "next/image"

const Client = () => {

    const logos = [
        { src: '/img/marca/logo.png', alt: 'Logo 1', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 },
        { src: '/img/marca/logo.png', alt: 'Logo 2', width: 60, height: 60 }
    ]

    return (
        <>
            <div className="firstcontent">
                <div className={styles.clients}>
                    <h2>Ut nulla <span className="color1">consectetur</span></h2>
                    <div className={styles.cllogos}>
                        {logos.map((logo, index) => (
                            <div key={index}>
                                <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

Client.displayName = 'Client'
export default Client