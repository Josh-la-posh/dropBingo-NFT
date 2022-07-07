import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {

    render() {
        return(
            <div className='container-fluid'>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/' element={<Navigate return to='/home' />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default Main;