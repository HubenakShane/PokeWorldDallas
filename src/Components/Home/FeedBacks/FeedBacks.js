import React, { useEffect, useState } from 'react';
import FeedBackDetails from '../FeedBackDetails/FeedBackDetails'
import './FeedBacks.css'


const FeedBacks = () => {

    const [feedBacks, setFeedBacks] = useState([])
    useEffect(()=>{
        fetch('place here your api',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setFeedBacks(data));
    },[])
    
    return (
       <section className="feedBacks my-5 mt-5 mb-5">
           <div className="container">
               <div className="section-header text-center mb-5">
                    <h3>Show us <span style={{color: "#7AB259"}}>Your Love</span></h3>
               </div>
               <div className="card-deck mt-5 mb-5">
                   <div className="row">
                    {
                        feedBacks.map(review => <FeedBackDetails review={review} key={review._id}/>)
                    }
                    </div>
               </div>
           </div>
       </section>
    );
};

export default FeedBacks;