import dynamic from 'next/dynamic'
import React from 'react'
// import SidebarComponent from "../components/sidebarComponent"
const SidebarComponent = dynamic(() => import('../components/sidebarComponent.js'))

const SidebarPage = () => {
    return (
        <div>
            <SidebarComponent />

        </div>
    )
}

export default SidebarPage