import React from 'react'
import dynamic
 from 'next/dynamic'

const walletPage = () => {
    const WalletComponent = dynamic (() => import("../../src/components/walletPage"))
  return (
    <div>
        <WalletComponent  />
    </div>
  )
}

export default walletPage