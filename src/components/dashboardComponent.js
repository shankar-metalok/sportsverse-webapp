

import React from 'react'
import NavBarComponent from './navbarComponent'
import Sidebar from './sidebarComponent'
import LeagueComponent from './leagueComponent'
import QuickTradeComponent from "./quickTradeComponent"

const DashboardComponent = (props) => {
    // console.log("props....", props.prices)



console.log("dashboard pricesasdfasdfdsa " , props.prices3)

    
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



