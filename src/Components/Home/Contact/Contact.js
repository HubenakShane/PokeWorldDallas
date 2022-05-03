import React from 'react';
import './Contact.css';
// line 10 change color 
const Contact = () => {
    return (
       <section className="contact">
           <div className="container pt-5 mb-5 py-2">
           <div className="row">
               <div className="col-md-6">
                    <h2 style={{color: "#2D2D2D"}} className="mb-4"><br/> </h2>
                    <p> <br/> </p>
               </div>
               <div className="col-md-6">
                    <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your email address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name / comany's name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-style">Submit </button>
                       </div>
                   </form>
               </div>
           </div>
           </div>
           <div className="py-4">
           <p className="text-muted text-center">copyright PokeWorldDallas</p>
           </div>
       </section>
    );
};

export default Contact;