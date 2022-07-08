import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Documentation extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <section className="doc">
                    <div className="doc-heading">
                        <p className="doc-heading__primary pri-heading">Documentation</p>
                        <p className="sec-heading">Discover how our user can Airdrop NFT to over 3000 wallet in seconds.</p>
                    </div>
                </section>

                <section className="doc-nav">
                    <div className="doc-nav__content" aria-label="breadcrumb">
                        <Breadcrumb>
                            <BreadcrumbItem active className='doc-nav__btn doc-nav__btn-1'><Link to='/doc' className='doc-nav__btn-1__link'>About Dropbingo</Link></BreadcrumbItem>
                            <BreadcrumbItem className='doc-nav__btn doc-nav__btn-2'><Link to='/web3' className='doc-nav__btn-2__link'>Web3 Guide</Link></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </section>

                <section className="doc-step">
                    <div className="doc-step__heading">
                        <p className="text-600-32">How to get NFT info from Opensea</p>
                        <p className="text-400-18">Step by step ways to get NFT info from Openseas</p>
                    </div>   

                    <div className='doc-steps'>
                        <p className="doc-step__process">Yoooo</p>
                        <p className="text-400-16">Y0000</p>
                    </div>   
                </section>

                <section className="section-ready">
                    <p className="section-ready__header text-center">Ready To Airdrop?</p>
                    <p className="section-ready__text text-center">Start your airdrop and get to learn more about dropbingo</p>
                    <div className="section-ready__btn u-flex">
                        <button className='btn btn-primary btn-3'>Start Airdrop</button>
                        <button className='btn btn-secondary btn-3'>Learn More</button>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Documentation;