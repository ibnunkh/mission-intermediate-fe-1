import React from 'react'
import Logo from '../../assets/images/Logo-videobelajar.svg'
import FacebookIcon from '../../assets/images/facebook-icon.svg'
import InstagramIcon from '../../assets/images/instagram-icon.svg'
import TwitterIcon from '../../assets/images/twitter-icon.svg'
import LinkedinIcon from '../../assets/images/linkedin-icon.svg'


export default function Footer() {
    return (
        <>
            <footer>
                <div className="footerContainer">
                    <div className="footer-content">
                        <div className="about">
                            <div className="footer-logo">
                                <img src={Logo} alt="logo-videobelajar"/>
                            </div>
                            <div className="footer-text">
                                <div className="text-head">
                                    <p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                                </div>
                                <div className="text-address">
                                    <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                                </div>
                                <div className="text-phone">
                                    <p>+62-877-7123-1234</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-2">
                            <div className="category">
                                <p className="about-title">Kategori</p>
                                <div className="about-list">
                                    <p className="list">Digital & Teknologi</p>
                                    <p className="list">Pemasaran</p>
                                    <p className="list">Manajemen Bisnis</p>
                                    <p className="list">Pengembangan Diri</p>
                                    <p className="list">Desain</p>
                                </div>
                            </div>

                            <div className="company">
                                <p className="about-title">Perusahaan</p>
                                <div className="about-list">
                                    <p className="list">Tentang Kami</p>
                                    <p className="list">FAQ</p>
                                    <p className="list">Kebijakan Privasi</p>
                                    <p className="list">Ketentuan Layanan</p>
                                    <p className="list">Bantuan</p>
                                </div>
                            </div>

                            <div className="community">
                                <p className="about-title">Komunitas</p>
                                <div className="about-list">
                                    <p className="list">Tips Sukses</p>
                                    <p className="list">Blog</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-group">
                        <div className="copyright">
                            <p>@2023 Gerobak Sayur All Rights Reserved.</p>
                        </div>
            
                        <div className="social-media">
                            <div className="icon">
                                <img className="linkedin" src={LinkedinIcon} alt="linkedin-icon"/>
                            </div>
                            <div className="icon">
                                <img src={FacebookIcon} alt="facebook-icon"/>
                            </div>
                            <div className="icon">
                                <img src={InstagramIcon} alt="instagram-icon"/>
                            </div>
                            <div className="icon">
                                <img src={TwitterIcon} alt="twitter-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}