import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'



import Dashboardcenter from '@/component/dashboardcenter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <html>
      <head>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />

      </head>

    <Dashboardcenter/>
    
    </html>
  )
}
