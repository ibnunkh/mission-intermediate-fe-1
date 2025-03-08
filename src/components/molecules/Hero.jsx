import React from 'react'
import Image from '../../assets/images/hero-image.png'

export default function Hero() {
    return (
        <>
            <div className="heroImage">
                <img src={Image} alt="hero-image" />
                <div className="heroText">
                    <h1>Revolusi Pembelajaran: Temukan ilmu Baru melalui Platform Video Interaktif!</h1>
                    <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
                </div>
                <button>
                    <span>Temukan Video Course untuk Dipelajari!</span>
                </button>
            </div>
        </>
    )
}