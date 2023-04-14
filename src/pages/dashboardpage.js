import db from "../firestore/fireConfig";
import { collection, onSnapshot, query, getDocs } from "firebase/firestore"

import dynamic from 'next/dynamic'
import React from 'react'
// import SidebarComponent from "../components/sidebarComponent"
const Dashboard = dynamic(() => import('../components/dashboardComponent.js'))

const DashBoardPage = (props) => {
    // console.log("props-dash", props.prices2)

    
    return (
        <>
            <Dashboard prices3= {props.prices2}/>

        </>
    )
}


export default DashBoardPage 














