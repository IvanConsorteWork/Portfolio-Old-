import React from 'react';
import { Link } from 'react-router-dom';
import './PricingCard.css';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Dages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to='/contact' className='btn'>PURCHASE NOW</Link>
            </div>

            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 200</p>
                <p>- 2 Days -</p>
                <p>- 5 Dages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to='/contact' className='btn'>PURCHASE NOW</Link>
            </div>

            <div className='card'>
                <h3>- Business -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 300</p>
                <p>- 5 Days -</p>
                <p>- 8 Dages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to='/contact' className='btn'>PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard