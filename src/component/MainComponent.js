import React, { Component } from 'react';
import Home from './HomeComponent';
import Pricing from './PricingComponent';
import Documentation from './DocComponent';
import WebGuide from './WebGuide';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { QUESTIONS } from '../shared/pricingQuestion';
import { STEPS } from '../shared/DocStep';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            steps: STEPS,
            questions: QUESTIONS
        }
    }

    render() {
        return(
            <div className='container-fluid'>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/pricing' element={<Pricing questions={this.state.questions}/>} />
                    <Route path='/doc' element={<Documentation />} />
                    <Route path='/web3' element={<WebGuide />} />
                    <Route path='/' element={<Navigate return to='/home' />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default Main;