import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './WalletHeader';
import WalletConnect from './WalletConnect';

class Wallet extends Component {

    render() {
        return(
            <div>
                <Header />
                <Routes>
                    <Route path='/wallet' element={<WalletConnect />} />
                    {/* <Route path='/connect' element={<Header />} /> */}
                </Routes>
            </div>
        )
    }
}

export default Wallet;