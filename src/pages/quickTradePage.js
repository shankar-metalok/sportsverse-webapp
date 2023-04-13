import dynamic from 'next/dynamic'
import React from 'react'
const QuickTradeComponent = dynamic(() => import('../components/navbarComponent'))

const QuickTradePage = () => {
    return (
        <div>
            <QuickTradeComponent />

        </div>
    )
}

export default QuickTradePage