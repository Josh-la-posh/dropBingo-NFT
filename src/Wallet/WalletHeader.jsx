import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return (
            <div className="wallet-header u-flex-between">
                <div className="wallet-header__logo">
                    <img src="./asset/images/logo.png" alt="logo" />
                </div>
                <div className="wallet-account u-flex">
                    <div className="wallet-account__type u-flex">
                        <img src="./asset/images/eth.png" className='wallet-account__icon' />
                        <div className="wallet-account__name text-700-14">Ethereum</div>
                    </div>
                    <div className="wallet-details u-flex-between">
                        <div className="wallet-details__amount text-700-14">10.5eh</div>
                        <img src="./asset/images/brazuca-plant.png" className='wallet-details__img' />
                        <div className="wallet-details__address text-700-14">0x3D.....7cBd</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;