// import Dashboardcenter from "../styles/dashboardcenter.css"
import Image from "next/image";

import srhlogo from "../images/srh-logo.png";

import wallet from "../images/wallet-money.png";
import money from "../images/money-add.png";
import empty from "../images/empty-wallet.png";

import load1 from "../images/graphload-img.png";
import load2 from "../images/graphload-img2.png";
import tsymbal from "../images/tsymbal.png";
import rrlogo from "../images/rrimg-logo.png";



const Dashboardcenter = () => {
  //   const indian_league = [
  //     {
  //       teamA: srhlogo,
  //       teamB: srhlogo,
  //     },
  //     {
  //       teamA: srhlogo,
  //       teamB: srhlogo,
  //     },
  //   ];
  return (
    <div>
      <div className="totalamt-section">
        <div className="totalamt-parent">
          <div className="totalamt-child1">
            <div className="totalamt-child1-0">
              <div className="totalamt-subparent1">
                <div className="totalamt-subparentchild1">
                  <div className="subparentsubchild1">
                    <Image
                      src={wallet}
                      alt=""
                      style={{ width: "15px;height:15px" }}
                    />
                    <p>Total sportsverse Holdings</p>
                  </div>
                  <div className="subparentsubchild2">
                    <p>₹5,62,435.35</p>
                    <p>+9.2%</p>
                  </div>
                </div>
              </div>

              <div className="totalamt-subparent2">
                <div className="subparentsubchild3">
                  <Image
                    src={money}
                    alt=""
                    style={{ width: "15px;height:15px" }}
                  />
                  <p>Total sportsverse Holdings</p>
                </div>
                <div className="subparentsubchild4">
                  <p>₹5,62,435.35</p>
                  <p>+9.2%</p>
                </div>
              </div>

              <div className="totalamt-subparent3">
                <div className="subparentsubchild5">
                  <Image
                    src={empty}
                    alt=""
                    style={{ width: "15px;height:15px" }}
                  />
                  <p>Total sportsverse Holdings</p>
                </div>
                <div className="subparentsubchild6">
                  <p>₹5,62,435.35</p>
                  <p>+9.2%</p>
                </div>
              </div>
            </div>

            <div className="totalamt-child1-2">
              <div className="totalamt-subparent4">
                <div className="todays-pl">
                  <p className="today-text">Today’s P&L</p>
                  <p className="today-amount">₹5,624.35</p>
                  <Image src={load1} alt="" />
                  <div className="today-team-names">
                    <p>RSVC, BSVC, HSVC, CSVC, KSVC</p>
                    <p>MSVC, PSVC</p>
                  </div>
                </div>
              </div>
              <div className="totalamt-subparent5">
                <div className="todays-pl">
                  <p className="today-text">Total P&L</p>
                  <p className="today-amount">₹15,253.50</p>
                  <Image src={load2} alt="" />
                  <div className="today-team-names">
                    <p>RSVC, BSVC, HSVC, CSVC, KSVC</p>
                    <p>MSVC, PSVC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="totalamt-child2">
            <div className="quick-trade">
              <h1 className="quick-trade-heading">Quick Trade</h1>
              <div className="quick-trade-amt">
                <p>Enter Amount</p>
                <p>Avbl : 30,000 USDT</p>
              </div>

              <div className="quick-trade-child">
                <div className="quick-trade-subchild">
                  <Image src={tsymbal} alt="" />
                  <select className="dropdown-trade">
                    <option value="volvo"> USDT</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                    <option value="audi">5</option>
                    <option value="audi">6</option>
                  </select>
                </div>
                <div className="quick-trade-suchild2">
                  <input type="text" placeholder="0.00" />
                </div>
              </div>
              <div className="quick-trade-child2">
                <div className="quick-trade-subchild">
                  <Image src={rrlogo} alt="" />
                  <select className="dropdown-trade">
                    <option value="volvo">RSVC</option>
                    <option value="saab">HSVC</option>
                    <option value="opel">LSVC</option>
                    <option value="audi">DSVC</option>
                    <option value="audi">CSVC</option>
                    <option value="audi">MSVC</option>
                  </select>
                </div>
                <div className="quick-trade-suchild2">
                  <input type="text" placeholder="0.00" />
                </div>
              </div>
            </div>
            <button className="continue-btn">Continue</button>

          </div>
        </div>

        <div></div>
      </div>

      {/*------------------------------------------------------ second section  */}

      {/* <div>
        <div>
          <h1> Indian Premier League </h1>
          <h1>T20 Worldcup</h1>
          <h1>Asia Cup</h1>
        </div>
        <div>
          {indian_league.map((teams_data) => (
            <div>
              <img src={teams_data.teamA} alt="adf" />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Dashboardcenter;
