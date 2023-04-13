import React from 'react'
import Image from 'next/image'
import playImage from "../../public/images/Vector (3).png"
import sunrisersImage from "../../public/images/sunrisers.png";
import bangaloreImage from '../../public/images/royalChallengersBangalore.png';
import pungabImage from "../../public/images/punjabKings.png"
import delhiCapital from "../../public/images/delhicapital.png"
import QuickTradeComponent from '../../src/components/quickTradeComponent'

const LeagueComponent = () => {
    return (
        <div className='league-main-container'>

            <QuickTradeComponent />

            <div className="league-tags-container">
                <p>Indian Premier League</p>
                <p>T20 Worldcup</p>
                <p>Asia Cup</p>
            </div>
            <div className="all-cards-container" style={{ display: 'flex', flexWrap: 'wrap' }}>


                <div className="league-card">
                    <div>
                        <button className='league-live-btn'>Live</button>
                        <div className='batches-container'>


                            <div>
                                <Image src={sunrisersImage} alt="" height={50} width={50} />
                                <p>$256.72</p>
                            </div>
                            <p> VS </p>
                            <div>


                                <Image src={bangaloreImage} alt="" height={50} width={50} />
                                <p>$58.7</p>
                            </div>
                        </div>

                    </div>
                    <div className='live-score-container'>


                        <div>
                            <p>SRH- 67/2</p>
                            <p>RCB - 128/7</p>

                        </div>
                        <div>
                            <Image src={playImage} alt="" height={30} width={30} />
                        </div>
                    </div>

                </div>
                <div className="league-card">
                    <div>
                        <button className='league-live-btn'>Live</button>
                        <div className='batches-container'>


                            <div>
                                <Image src={delhiCapital} alt="" height={50} width={50} />
                                <p>$256.72</p>
                            </div>
                            <p> VS </p>
                            <div>


                                <Image src={pungabImage} alt="" height={50} width={50} />
                                <p>$58.7</p>
                            </div>
                        </div>

                    </div>
                    <div className='live-score-container'>


                        <div>
                            <p>SRH- 67/2</p>
                            <p>RCB - 128/7</p>

                        </div>
                        <div>
                            <Image src={playImage} alt="" height={30} width={30} />
                        </div>
                    </div>

                </div>
                <div className="league-card">
                    <div>
                        <button className='league-live-btn'>Live</button>
                        <div className='batches-container'>


                            <div>
                                <Image src={bangaloreImage} alt="" height={50} width={50} />
                                <p>$256.72</p>
                            </div>
                            <p> VS </p>
                            <div>


                                <Image src={sunrisersImage} alt="" height={50} width={50} />
                                <p>$58.7</p>
                            </div>
                        </div>

                    </div>
                    <div className='live-score-container'>


                        <div>
                            <p>SRH- 67/2</p>
                            <p>RCB - 128/7</p>

                        </div>
                        <div>
                            <Image src={playImage} alt="" height={30} width={30} />
                        </div>
                    </div>

                </div>
                <div className="league-card">
                    <div>
                        <button className='league-live-btn'>Live</button>
                        <div className='batches-container'>


                            <div>
                                <Image src={sunrisersImage} alt="" height={50} width={50} />
                                <p>$256.72</p>
                            </div>
                            <p> VS </p>
                            <div>


                                <Image src={bangaloreImage} alt="" height={50} width={50} />
                                <p>$58.7</p>
                            </div>
                        </div>

                    </div>
                    <div className='live-score-container'>


                        <div>
                            <p>SRH- 67/2</p>
                            <p>RCB - 128/7</p>

                        </div>
                        <div>
                            <Image src={playImage} alt="" height={30} width={30} />
                        </div>
                    </div>

                </div>
            </div>
            <div className='drop-down-container'>

            </div>


        </div>
    )
}
export default LeagueComponent
