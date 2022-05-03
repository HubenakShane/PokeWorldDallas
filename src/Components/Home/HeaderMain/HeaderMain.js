import React from 'react';
// change out image to something more personal
import frame from '../../../creative-agency/images/logos/unnamed.jpg'
const HeaderMain = () => {
    return (
        <main style={{margin: "12px 0px 0px 0px"}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-8 offset-md-1">
                <div class="animate seven">
                <h1> <div1> <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span> <span>t</span><span>o</span> <span>P</span><span>o</span><span>k</span><span>e</span> <span>W</span><span>o</span><span>r</span><span>l</span><span>d</span> </div1>  <br/><div1> <span>W</span><span>h</span><span>e</span><span>r</span><span>e</span> <span>y</span><span>o</span><span>u</span><span>r</span> <span>J</span><span>o</span><span>u</span><span>r</span><span>n</span><span>e</span><span>y</span> <span>w</span><span>i</span><span>l</span><span>l</span> <span>b</span><span>e</span><span>g</span><span>i</span><span>n</span></div1> </h1>
                </div>
                <p className="">Where your Team becomes your greatest investment!</p>
                <button className="btn btn-style">Shop Now</button>
            </div>
            <div className="col-md-6 col-sm-8 col-12">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;