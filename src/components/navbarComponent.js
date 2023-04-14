

import React from 'react'
import Image from 'next/image'
import sportsverseLogo from "../../public/images/sportsverse-logo.png"
import helpLineIcon from "../../public/images/help-icon.png";
import notificationIcon from "../../public/images/notification-icon.png";
import profileIcon from "../../public/images/profile-icon.png"
import dollerIcon from "../../public/images/doller-icon.png"


import { useEffect, useState } from "react";






// import RPC from '../web3RPC.ts';
import RPC from "./web3RPC.ts";
import { Web3Auth } from "@web3auth/web3auth";
import { getPublic } from "@toruslabs/eccrypto";
// import { loginServer, postAvatarURL } from "../services/userService";
// import { loginServer } from "../../services/userService";

const NavBarComponent = () => {




    const clientId =
    "BK_TX48ntUieviViLOy8xwUhCirzTQI3uL7NwHsKkZk_-R7Zzpoxc2WNJDauT3OMRpolI7wlNRHUgT8SD0hjNDE";

  const [web3auth, setWeb3auth] = useState("");
  const [provider, setProvider] = useState("");
  const [idToken, setidToken] = useState("");
  const [pubKey, setpubKey] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [showlogout, setShowlogout] = useState(false);

//   function userinfo() {
//     userInfo = {};
//   }

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    console.log("web response: ", web3authProvider);
    
  };



 async function loginServer(idToken,pubKey) {
    const response = await fetch(`https://backend.sportsverse.cricket/users/login`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + idToken,
        }),
        body: JSON.stringify({"publicKey": pubKey})
      })
      console.log("response from server",response)
    return await response.json();

    }
    useEffect(()=>{
        loginServer(idToken,pubKey)
    },[idToken,pubKey])
  

  const getId = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const id = await web3auth.authenticateUser();
    setidToken(id.idToken);
  };

  const afterLogin = async () => {
    const res = await loginServer(idToken, pubKey);
    console.log(res);
    setUserInfo(res.user);
    setShowlogout(true);
    return true;
  };

  // const senData = async () =>{
  //   const apiURl = "https://backend.sportsverse.cricket/users/login/"
  //   const object ={
  //     publicKey:pubKey,
  //     userName:userInfo.user
  //   }
  // }

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log("private key :",privateKey)
    return privateKey;
  };

  const getPubKey = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const app_scoped_privkey = await getPrivateKey();
    const app_pub_key = getPublic(
      Buffer.from(app_scoped_privkey.padStart(64, "0"), "hex")
    ).toString("hex");
    console.log(app_pub_key);
    setpubKey(app_pub_key);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
    setUserInfo(null);
    setShowlogout(false);
  };

  useEffect(() => {
    const init2 = async () => {
      await getId();
      await getPubKey();
      await getPrivateKey()
    };
    if (provider) init2();
  }, [provider]);

  useEffect(() => {
    const init2 = async () => {
      await getId();
      await getPubKey();
    };
    if (provider) init2();
  }, [provider]);

  useEffect(() => {
    const init3 = async () => {
      await afterLogin();
    };
    if (idToken && pubKey) {
      init3();
    }
  }, [idToken, pubKey]);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: clientId,
          chainConfig: {
            chainNamespace: "eip155",
            chainId: "0x89", // hex of 80001, polygon testnet
            rpcTarget:
              "https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF",
          },
          authMode: "WALLET",
          uiConfig: {
            theme: "dark",
            loginMethodsOrder: ["facebook", "google"],
            appLogo:
              "https://metalok.io/wp-content/uploads/2022/06/image-1@2x.png", // Your App Logo Here
          },
          defaultLanguage: "en",
        });

        setWeb3auth(web3auth);

        await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
          console.log(provider);
        }
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    console.log(web3auth);
  }, [web3auth]);













    return (
        <nav className="nav-main-container">
            <div className='logo-link-container'>
                <div className='nav-logo-container'>
                    <Image src={sportsverseLogo} alt="" height={30} width={30} />
                    <h2>sportsverse</h2>
                </div>
                <div className='nav-links-container'>
                    <p>Dashboard</p>
                    <p>Trade</p>
                    <p>Wallet</p>
                    <p>Portfopo</p>
                    <p>News</p>



                </div>

                {showlogout == false && (<button className="header-login responsive-header-navlinks2" onClick={login}>
                    {" "}
                    SIGN UP{" "}
                  </button>
                )}
                {showlogout && ( <button className="header-login"  >{userInfo.name}</button>
                )}

                <button onClick={logout}>logout</button>
            </div>
            <div className="profile-notification-container">


                <div style={{ marginRight: "20px", display: 'flex' }}>
                    <button className="deposit-btn">
                        <Image src={dollerIcon} alt="" /> <span style={{ marginLeft: "1rem" }}> Deposit</span>

                    </button>
                    <button className="deposit-btn">
                        Withdraw

                    </button>


                </div>
                <div className='icon-container'>
                    <Image src={helpLineIcon} alt="" />
                    <Image src={notificationIcon} alt="" />
                    <Image src={profileIcon} alt="" />


                </div>
            </div>



          

        </nav>
    )
}

export default NavBarComponent
