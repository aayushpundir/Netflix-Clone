import React from 'react';
import './PlansScreen.css';

function PlansScreen() {
  return (
    <div>
      <div className='premiumPlans'>
        <h5>Premium <br/> 4k+HDR</h5>
        <button>Subscribe</button>
      </div>
      <div className='basicPlans'>
        <h5>Basic <br/> 720p</h5>
        <button>Subscribe</button>
      </div>
      <div className='standardPlans'>
        <h5>Standard <br/> 1080p</h5>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default PlansScreen;