

import dynamic from 'next/dynamic'
import React from 'react'
const NavBarComponent = dynamic(() => import('../components/navbarComponent'))

const NavBarPage = () => {
    return (
        <div>
            <NavBarComponent />

        </div>
    )
}

export default NavBarPage
