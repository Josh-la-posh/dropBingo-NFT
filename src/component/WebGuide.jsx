import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class WebGuide extends Component {
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
                            <BreadcrumbItem active className='doc-nav__btn doc-nav__btn-3'><Link to='/doc' className='doc-nav__btn-3__link'>About Dropbingo</Link></BreadcrumbItem>
                            <BreadcrumbItem className='doc-nav__btn doc-nav__btn-4'><Link to='/web3' className='doc-nav__btn-4__link'>Web3 Guide</Link></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </section>

                <section className="doc-step">
                    <div className="doc-step__heading">
                        <p className="text-600-32">Introduction to Drop block</p>
                        <p className="text-400-14 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque fringilla est sed pellentesque pellentesque augue est mauris. Quam amet, amet nisl, odio ullamcorper natoque interdum. Mauris et cursus quisque facilisis augue. Facilisis fringilla adipiscing ut venenatis dictum ut at iaculis. Morbi penatibus interdum molestie gravida malesuada nunc lacus, tortor tellus. Consectetur nisi, et tristique porttitor ipsum.</p>
                    </div>  
                </section>

                <section className="doc-step">
                    <div className="doc-step__heading">
                        <p className="text-600-32">Features</p>
                        <p className="text-400-14 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo habitasse pretium etiam. Quam ultrices varius purus elit sem felis in eros senectus.</p>
                    </div>  
                </section>

                <section className="doc-step">
                    <div className="doc-step__heading">
                        <p className="text-600-32">Quick Start Guide</p>
                        <p className="text-400-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque fringilla est sed pellentesque pellentesque augue est mauris. Quam amet, amet nisl, odio ullamcorper natoque interdum. Mauris et cursus quisque facilisis augue. Facilisis fringilla adipiscing ut venenatis dictum ut at iaculis. Morbi penatibus interdum molestie gravida malesuada nunc lacus, tortor tellus. Consectetur nisi, et tristique porttitor ipsum.</p>
                        <ol className='text-400-14'>
                            <li>Select a token to airdrop</li>
                            <li>Select wallet to send airdrop to</li>
                            <li>Send your airdrop</li>
                        </ol>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default WebGuide;