import Head from 'next/head'
import Image from 'next/image'
import db from "../firestore/fireConfig";
import { collection, onSnapshot, query, getDocs } from "firebase/firestore"

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import DashBoardPage from './dashboardpage';

import WalletPage from '../components/walletPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const router = useRouter()
  return (
    <>
          <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />

      <h1>home Component</h1>

      <DashBoardPage prices2 = {props.prices} />

      <WalletPage/>

      {/* <button onClick={() => router.push({
        query: {
          sidebarId: "10233"
        }, pathname: "/sidebar"
      })} >Next</button> */}


    </>
  )
}

export async function getServerSideProps() {
  console.log("calling.....")
  const colRef = collection(db, 'Price');
  let prices = [];

  const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      prices = querySnapshot.docs.map(doc => doc.data());
      prices = JSON.parse(JSON.stringify(prices))

    

  });

  await new Promise(resolve => setTimeout(resolve, 1000));

  unsubscribe();


  console.log("price of ", prices)

  return {
      props: {
          prices
}
 };
}
