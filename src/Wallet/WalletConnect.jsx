import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

class WalletConnect extends Component {
    constructor(props) {
        super(props);

        this.state= {
            isModalOpen: false
        }
        this.toggleModal= this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() { 
        return (
            <div className='wallet-connect'>
                <section className="wallet-connect__heading">
                    <h5 className="wallet-connect__heading-primary text-700-24">Airdrop NFTs to your friends</h5>
                </section>
                <section className='u-flex'>
                    <div className="wallet-connect__body wallet-container">
                        <h5 className="text-700-24 wallet-connect__body-heading">Connect your wallet</h5>
                        <img src="./asset/images/black-wallet.png" alt="" />
                        <button onClick={this.toggleModal} className='btn wallet-connect__btn'>Connect wallet</button>                        
                    </div>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} dialogClassName='modal'>
                        <ModalHeader toggle={this.toggleModal} ClassName='modal-header'><h6>Switch network</h6></ModalHeader>
                        <ModalBody>
                            <div className="network">
                                <div className="network-content network-content__eth u-flex-between">
                                    <div className="network-content__details u-flex-between">
                                        <img src="./asset/images/eth-1.png" alt="" />
                                        <span className='text-700-16'>Ethereum</span>
                                    </div>
                                    <div className="network-connect u-flex-between">
                                        <span className='text-400-14'>Connected</span>
                                        <img src="./asset/images/check.png" alt="" />
                                    </div>
                                </div>
                                <div className="network-content network-content__polygon u-flex-between">
                                    <div className="network-content__details u-flex-between">
                                        <img src="./asset/images/polygon.png" alt="" />
                                        <span className='text-700-16'>Polygon</span>
                                    </div>
                                    <div className="network-connect u-flex-between">
                                        <span className='text-400-14'>Connected</span>
                                        <img src="./asset/images/check.png" alt="" />
                                    </div>
                                </div>
                                <div className="network-content network-content__bnb u-flex-between">
                                    <div className="network-content__details u-flex-between">
                                        <img src="./asset/images/bnb.png" alt="" />
                                        <span className='text-700-16'>BNB</span>
                                    </div>
                                    <div className="network-connect u-flex-between">
                                        <span className='text-400-14'>Connected</span>
                                        <img src="./asset/images/check.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </section>
            </div>
        );
    }
}
 
export default WalletConnect;