

import React from 'react'
import Image from 'next/image'
import sportsverseLogo from "../../public/images/sportsverse-logo.png"
import helpLineIcon from "../../public/images/help-icon.png";
import notificationIcon from "../../public/images/notification-icon.png";
import profileIcon from "../../public/images/profile-icon.png"
import dollerIcon from "../../public/images/doller-icon.png"

const NavBarComponent = () => {
    return (
        <nav className="nav-main-container">
            <div className='logo-link-container'>
                <div className='nav-logo-container'>
                    <Image src={sportsverseLogo} alt="" height={30} width={30} />
                    <h2>sportsverse</h2>
                </div>
                <div className='nav-links-container'>
                    <p>Dashboard</p>
                    <p>Trade</p>
                    <p>Wallet</p>
                    <p>Portfopo</p>
                    <p>News</p>

                </div>
            </div>
            <div className="profile-notification-container">


                <div style={{ marginRight: "20px", display: 'flex' }}>
                    <button className="deposit-btn">
                        <Image src={dollerIcon} alt="" /> <span style={{ marginLeft: "1rem" }}> Deposit</span>

                    </button>
                    <button className="deposit-btn">
                        Withdraw

                    </button>


                </div>
                <div className='icon-container'>
                    <Image src={helpLineIcon} alt="" />
                    <Image src={notificationIcon} alt="" />
                    <Image src={profileIcon} alt="" />


                </div>
            </div>

        </nav>
    )
}

export default NavBarComponent
