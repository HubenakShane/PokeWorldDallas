import React from 'react';
import Dragonite from '../../../creative-agency/images/logos/Dragonite.jpg';
import Dragonite1 from '../../../creative-agency/images/logos/Dragonite1.jpg';
import EnergyRemoval from '../../../creative-agency/images/logos/EnergyRemoval.jpg';
import Raichu from '../../../creative-agency/images/logos/Raichu.jpg';
import PokeFlute from '../../../creative-agency/images/logos/PokeFlute.jpg';

// new pictures and logos.

import './Clients.css'
const Clients = () => {
    return (
        <div className="" style={{marginTop: "4rem"}}>
            <div className="row  d-flex  align-items-center justify-content-center" style={{marginRight: "0px",marginLeft: "0px"}}>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={Dragonite} className="clientsIcon1"  alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={EnergyRemoval} className="clientsIcon2" alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={Raichu} className="clientsIcon3" alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={PokeFlute} className="clientsIcon4" alt=""/>
                    </div>
                    <div className="col-md-2 col-sm-3 col-4">
                        <img src={Dragonite1} className="clientsIcon5" alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default Clients;