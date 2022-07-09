import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return(
            <footer className='footer'>
                <div className='container-fluid'>
                    <div className='row footer-row'>
                        <div className='col-6 col-md-6 col-sm-6'>
                            <div className='footer-left'>
                                <h2 className='footer-header'>Dropbingo</h2>
                                <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam justo etiam elit auctor lorem pulvinar mi. Integer vitae cras venenatis aliquam maecenas diam diam ultricies. Ultrices egestas integer turpis.</p>
                                <div className='footer-social__link'>
                                    <p>Follow us on our social media for regular updates</p>
                                    <div className="col-12 col-md-12 col-sm-12">
                                        <div className='footer-btn'>
                                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-sm-6">
                            <div className='footer-right'>

                                <div className='row'>
                                    <div className="col-4 col-md-4 col-sm-4">
                                        <div className='footer-link'>
                                            <h5 className='footer__subheader'>Info</h5>
                                            <Link className="footer-link__link" to='/'>Demo</Link>
                                            <Link className="footer-link__link" to='/'>Contact</Link>
                                            <Link className="footer-link__link" to='/'>Terms</Link>
                                            <Link className="footer-link__link" to='/'>Privacy</Link>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4 col-sm-4">
                                        <div className='footer-link'>
                                            <h5 className='footer__subheader'>Tools</h5>
                                            <Link className="footer-link__link" to='/'>Airdrop</Link>
                                            <Link className="footer-link__link" to='/pricing'>Pricing</Link>
                                            <Link className="footer-link__link" to='/'>Terms</Link>
                                            <Link className="footer-link__link" to='/'>Privacy</Link>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4 col-sm-4">
                                        <div className='footer-link'>
                                            <h5 className='footer__subheader'>Dropbingo</h5>
                                            <Link className="footer-link__link" to='/'>About</Link>
                                            <Link className="footer-link__link" to='/doc'>Docs</Link>
                                            <Link className="footer-link__link" to='/'>Blog</Link>
                                            <Link className="footer-link__link" to='/'>Community</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;