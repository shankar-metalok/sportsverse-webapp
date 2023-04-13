

import React from 'react'
import NavBarComponent from './navbarComponent'
import Sidebar from './sidebarComponent'
import LeagueComponent from './leagueComponent'
import QuickTradeComponent from "./quickTradeComponent"

const DashboardComponent = () => {
    return (
        <>

            <NavBarComponent />
            <div style={{ display: 'flex', marginTop: "2rem"}}>
                <Sidebar />
                <div style={{ marginLeft: "1rem" }}>
                    <LeagueComponent />
                </div>

            </div>
        </>
    )
}
export default DashboardComponent
