import React from 'react'
import Image from "next/image";

import wallet from "../../public/images/wallet-money.png";
import money from "../../public/images/money-add.png";
import empty from "../../public/images/empty-wallet.png";

const buysalecomponent = () => {
  return (
    <>
        <div className='buy-sell-section'>


            <div className='buysell-parent1'>
                <div className='Total-sportsverse-Holdings'>
                  <div>
                    <Image src={wallet} alt="" />
                    <p>Total sportsverse Holdings</p>
                  </div>
                  <h3>₹5,62,435.35</h3>
                  <p>+9.2%</p>
                
                </div>
                <div className='Total-Wallet-balance'>
                <div>
                    <Image src={wallet} alt="" />
                    <p>Total Wallet balance</p>
                  </div>
                  <h3>$30,000USDT</h3>
                </div>
                <div className='Total-Matic-balance' >
                <div>
                    <Image src={wallet} alt="" />
                    <p>Total Matic balance</p>
                  </div>
                  <h3>20 Matic ($20)</h3>
                  </div>
                <div className='Wallet-Address'>
                  <h1>Wallet Address</h1>
                  <div>
                    <h1>48394u.......83ucs8</h1>
                  </div>
                  </div>
            </div>

            <div className='buysell-parent2'>
                <div className='key-section'>

                  <p>DIsclaimer : Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>

                  <button>Key</button>
                </div>
                <div className='buy-selltoken-section'>
                   <h1>Buy/Sell token</h1>
                   <div>
                      <p>Enter Amount</p>
                      <p>Avbl : 30,000 USDT</p>
                   </div>


 

  
   
    
                   <div>
                      <div>
                          <div>
                            

                          </div>
                          <div>

                          </div>
                      </div>



                      <p>You will Receive</p>
                      



                      <div>
                        <p>Wallet Name</p>
                        <p>John Doe </p>
                        <p>Tokens you will receive</p>
                        <p>35.23 RSVC</p>
                        <p>Gas fee</p> 
                        <p>0.02 Matic (($0.02) )</p>

                      </div>


                   </div>

                   <div>
                    <button>BUY </button>
                    <button>SELL </button>
                   </div>


                </div>
            </div>
        </div>

    </>
  )
}

export default buysalecomponent