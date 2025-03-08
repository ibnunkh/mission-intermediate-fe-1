import React from 'react'
import logo from '../../assets/images/Logo-videobelajar.svg'
import avatarProfile from '../../assets/images/Avatar-profile.svg'


export default function Navbar() {
    return(
        <>
            <header>
                <nav>
                    <div className="navbar">
                        <img src={logo}/>
                        <ul>
                            <p>Kategori</p>
                        </ul>
                    </div>
                    <div className="avatar">
                        <img src={avatarProfile} alt="avatar"/>
                    </div>
                    <div className="menu-icon">
                        <i className="ph ph-list"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}