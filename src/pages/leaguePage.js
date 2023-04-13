import dynamic from 'next/dynamic'
import React from 'react'
// import SidebarComponent from "../components/sidebarComponent"
const League = dynamic(() => import('../components/leagueComponent.js'))

const SidebarPage = () => {
    return (
        <div>
            <League />

        </div>
    )
}

export default SidebarPage