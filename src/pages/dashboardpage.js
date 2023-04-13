

import dynamic from 'next/dynamic'
import React from 'react'
// import SidebarComponent from "../components/sidebarComponent"
const Dashboard = dynamic(() => import('../components/dashboardComponent.js'))

const DashBoardPage = () => {
    return (
        <>
            <Dashboard />

        </>
    )
}


export default DashBoardPage