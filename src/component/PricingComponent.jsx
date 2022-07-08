import React from 'react';

function RenderQuestion ({ questions }) {
    return(
        questions.map((question) => {
            return (
                <div key={question.id}>
                    <span><hr/></span>
                    <h6 className='question'>{question.question}</h6>
                    <p className='text-400-16 answer'>{question.answer}</p>
                </div>
            )
        })
    )
}

const Pricing = (props) => {
    return (
        <div>
            <section className='section-wallet u-flex-column'>
                <div className='section-wallet-text'>   
                    <p className="pri-heading">Unlimited Airdrops</p>
                    <p className="sec-heading">Discover how our user can Airdrop NFT to over 3000 wallet in seconds.</p>
                </div>
                
                <form className="form-wallet u-flex-align-start">
                    <i></i>
                    <h6>Ethereum</h6>
                    <i></i>
                </form>
            </section>

            <section className='section-airdrop'>
                <div className="section-airdrop__header u-flex-column">
                    <h5>Airdropping to wallet</h5>
                    <h6>Discover how our user can Airdrop NFT to over 3000 wallet in seconds</h6>
                    <div className="section-airdrop__amount">
                        <h6>Amount to airdrop</h6>
                        <form className='section-airdrop__amount__div'><h5>3000</h5></form>
                    </div>
                    <h6>Airdropping to <span>3000</span> wallet cost <span>15.00</span> MATIC <span>($6.09)</span></h6>
                </div>
            </section>

            <section className="section-question">
                <div className="section-question__content u-flex-column text-center">
                    <p className="section-question__header">Frequently Asked Questions</p>
                    <p className="section-question__text">Some of the question you might want to ask us.
                        You can easily get answers to all your questions here.</p>
                </div>
                <div className='section-question__accordion'>
                    <RenderQuestion questions={props.questions}/>
                    <span><hr/></span>
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
 
export default Pricing;