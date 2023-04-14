import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import delhiCapital from "../../public/images/delhicapital.png"
import chennaiSupers from "../../public/images/chennaiSuperkings.png";
import rcbs from "../../public/images/rcb logo.png";
import mumbaiIndia from "../../public/images/mumbaiIndians.png"
import rajasthanRoyals from "../../public/images/rajasthanRoyals.png";
import punjabKings from "../../public/images/punjabKings.png";
import sunrisers from "../../public/images/sunrisers.png"

// import "../styles/sidebar.css"
import { useRouter } from 'next/router';


const Sidebar = () => {
    const router = useRouter()
    const { query } = router
   

    const tokensList = [{
        id: "1",
        tokenDoller: "$0.0008",
        rupeeValue: "+0.547",
        tokenImg: delhiCapital
    },
    {
        id: "2",
        tokenDoller: "$0.0008",
        rupeeValue: "+0.547",
        tokenImg: chennaiSupers
    },
    {
        id: "3",
        tokenDoller: "$0.0008",
        rupeeValue: "+0.547",
        tokenImg: rcbs
    },
    {
        id: "4",
        tokenDoller: "$0.0008",
        rupeeValue: "+0.547",
        tokenImg: mumbaiIndia
    }, {
        id: "5",
        tokenDoller: "$0.0008",
        rupeeValue: "+0.547",
        tokenImg: rajasthanRoyals
    }, {
        id: "6",
        tokenDoller: "$0.0008",
        rupeeValue: "+0.547",
        tokenImg: punjabKings

    }
    ]
    // useEffect(() => {
    //     getTokensList()

    // }, [])
    // const getTokensList = async () => {
    //     const res = await fetch("")
    //     const jsonData = await res.json()
    //     setTokensList([...jsonData])

    // }
    

    return (
        <div className='side-bar-main'>
            <div className="tokens">
                <>
                    <p>My Tokens <span>All Tokens</span></p>

                    <table>
                        <tbody>

                       
                     
                            {
                                tokensList.map((each, index) => (
                                    < tr key={index} className="token-container">


                                    <td >
                                        <Image src={each.tokenImg} alt="" height={40} width={40} />
                                        
                                    </td>
                                    <td>
                                    <h1 style={{ marginLeft: "2rem" }}>{each.tokenDoller}</h1>
                                    </td>
                                    <td>
                                    <p style={{ marginLeft: "2rem" }}>{each.rupeeValue}</p>
                                        </td>
                                        </tr>

                                )

                                )
                            }
                             </tbody>

                        
                    </table>

                </>

            </div >
            <div className='tokens' style={{ marginTop: "1rem" }}>
                <h2 className='main-heading'>Live Score</h2>
                <div className='score-team'>


                    <div>
                        <Image src={sunrisers} alt="" height={40} width={40} />
                        <h4 className='all-headings'>SRH <br /><span className="sub-heading">Batting
                        </span></h4>

                    </div>
                    <div style={{ marginLeft: "2rem" }}>
                        <Image src={rcbs} alt="" height={30} width={40} />
                        <h4 className='all-headings'>RCB <br /><span className='sub-heading'>Bowling
                        </span></h4>

                    </div>
                </div>
                <h1 className='score-value'>123/5<span className="score-points">(16.3)</span></h1>
                <p className='sub-heading' style={{ textAlign: 'center' }} >This over</p>
                <div className='numbers-bar'>
                    <p>2</p>
                    <p>4</p>
                    <p>6</p>
                    <p></p>
                    <p></p>

                </div>
                <p className='sub-heading' style={{ textAlign: 'center' }}>current Price</p>
                <div>


                    <div className="score-team">
                        <Image src={rcbs} alt="" height={20} width={20} />
                        <div className="team-prices">


                            <h3 className='sub-heading'>RSVC</h3>
                            <p style={{ color: "#0BBB70" }} className="price-value">$250</p>
                        </div>
                    </div>
                    <div className='score-team'>
                        <Image src={sunrisers} alt="" height={20} width={20} />
                        <div className='team-prices'>



                            <h3 className='sub-heading'>HSVC</h3>
                            <p className='price-value'>$250</p>
                        </div>
                    </div>
                </div >

            </div >
        </div>
    )
}


export default Sidebar
