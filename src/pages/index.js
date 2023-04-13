import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import DashBoardPage from './dashboardpage';

import WalletPage from '../components/walletPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
          <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />

      <h1>home Component</h1>

      <DashBoardPage/>

      <WalletPage/>

      {/* <button onClick={() => router.push({
        query: {
          sidebarId: "10233"
        }, pathname: "/sidebar"
      })} >Next</button> */}


    </>
  )
}
