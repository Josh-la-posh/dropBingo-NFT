import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {

    render() {
        return (
            <main>
                <section className='section-about'>
                    <div className='row section-about__content'>
                        <div className='col-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='section-about__left'>
                                <h1 className='heading-primary'>The Easiest Way to Airdrop NFT</h1>
                                <p className='paragraph'>Discover how our user can Airdrop NFT to over 3000 wallet in seconds. <br />
                                    We put the power in your hands by giving you the tools to make things easier for you.
                                </p>
                                <div className='heading-primary__btn'>
                                    <Link to='/'><button className='btn btn-1 btn-primary'><h6>Start Airdrop</h6></button></Link>
                                    <Link to='/'><button className='btn btn-1 btn-secondary'><h6>Learn More</h6></button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='section-about__right u-flex-column-between'>
                                <h3>Select token on airdrop</h3>
                                <form className='right-box'>
                                    <p className='right-box-text'>Search</p>
                                    <input type="text" placeholder="Quickly find and select tokens" className='right-box-input'/>
                                </form>
                                <div className='right-box__img'>
                                    <div className='u-flex right-box__upload right-box__img__photo'>
                                    {/* <span><FontAwesomeIcon icon="fa-solid fa-arrow-up-to-line" /></span> */}
                                    <p>Upload file</p>
                                    </div>
                                    <img src='./asset/images/image-1.jpg' className='right-box__img__photo'/>
                                    <img src='./asset/images/image-2.jpg' className='right-box__img__photo'/>
                                    <img src='./asset/images/image-3.jpg' className='right-box__img__photo'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-features'>
                    <div>
                        <h3 className='heading-secondary'>Airdrop to your community members in 4 clicks</h3>
                    </div>
                    <div className='row card-section'>
                        <div className='col-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='card-box u-flex-column-between'>
                                <div className='card-box__icon u-flex'><h2><strong>1</strong></h2></div>
                                <h6>select NFT</h6>
                                <div className='card-box__text'><small><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur</p></small></div>
                            </div>
                        </div>
                        <div className='col-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='card-box u-flex-column-between'>
                                <div className='card-box__icon u-flex'><h2><strong>2</strong></h2></div>
                                <h6>select NFT</h6>
                                <div className='card-box__text'><small><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur</p></small></div>
                            </div>
                        </div>
                        <div className='col-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='card-box u-flex-column-between'>
                                <div className='card-box__icon u-flex'><h2><strong>3</strong></h2></div>
                                <h6>select NFT</h6>
                                <div className='card-box__text'><small><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur</p></small></div>
                            </div>
                        </div>
                        <div className='col-3 col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='card-box u-flex-column-between'>
                                <div className='card-box__icon u-flex'><h2><strong>4</strong></h2></div>
                                <h6>select NFT</h6>
                                <div className='card-box__text'><small><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur</p></small></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-start'>
                    <h2 className='section-start__grey u-center'>Ready to Airdrop?</h2>
                    <h2 className='section-start__purple u-center'><strong>Start your Airdrop Instantly</strong></h2>
                    <div className='heading-primary__btn section-start__btn'>
                                    <Link to='/'><button className='btn btn-1 btn-primary'><h6>Start Airdrop</h6></button></Link>
                                    <Link to='/'><button className='btn btn-1 btn-secondary'><h6>Learn More</h6></button></Link>
                            </div>
                </section>

                <section className='section-why'>
                    <div><h3 className='heading-secondary'>WHY CHOOSE US?</h3></div>
                    <div className='row card__why'>
                        <div className="col-4">
                            <div className='feature-box feature-box__1 u-flex'>
                                <div className='feature-box__icon'></div>
                                <h4>No Coding Required</h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='feature-box feature-box__2 u-flex'>
                                <div className='feature-box__icon'></div>
                                <h4>Secure Transaction</h4>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='feature-box feature-box__3 u-flex'>
                                <div className='feature-box__icon'></div>
                                <h4>On Time Delivery</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-sub'>
                    <div className='section-sub__container u-flex-column'>
                        <h3 className='section-sub__container__header'>Join our over 2000+ Mail Subscribers</h3>
                        <p className='section-sub__container__text'>Get exclusive access to web 3 news from our dedicatd research team</p>
                        <form className='form-sub'>
                            <input type="email" placeholder="Enter your email" className='form-sub__input' />
                            <button type='button' className='btn btn-2 btn-primary'>
                                <span className='before-submit'>Subscribe</span>
                                <span className='after-submit'></span>
                            </button>
                        </form>
                    </div>
                </section>


            </main>
        )
    }
}

export default Home;