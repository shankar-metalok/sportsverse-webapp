import React from 'react'
import NavBarComponent from './navbarComponent'
import Sidebar from './sidebarComponent'
import Buysellcomponent from './buysellcomponent'



const walletPage = () => {
  return (
    <div>
          {/* <NavBarComponent /> */}




          <div style={{ display: 'flex', marginTop: "2rem",justifyContent:'center' }}>
                <Sidebar />
                <div style={{ marginLeft: "1rem" }}>
                    <Buysellcomponent />
                </div>

            </div>
    </div>
  )
}

export default walletPage