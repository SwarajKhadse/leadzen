import React, { useState ,useRef } from 'react'
import './Card.css'
export default function Card({ e }) {
    const [showDetails, setShowDetails] = useState(false);
    var butt = "Show Details";
    if(showDetails==false)
    {
        butt="Show Details";
    }
    else{
        butt = "Hide Details"
    }
    const inputElem = useRef(1);
    function setDis(  ){
        alert("dshf ")
        setShowDetails(true)
       
           if(showDetails==false)
            {

                inputElem.current.style.display="block"
            }
            else{
                inputElem.current.style.display="none"
                butt = "show Details"
            }
      }
    return (
        <div>

            <div className="main_card">
                <div className="card">
                    <p>{e.username}</p>
                    <div>
                        <h5>NAME</h5>
                        <p className="card_detail">{e.name}</p>
                    </div>
                    <div>
                        <h5>EMAIL</h5>
                        <p className="card_detail">{e.email}</p>
                    </div>
                    <div>
                        <h5>CITY</h5>
                        <p className="card_detail">{e.address.city}</p>
                    </div>
                    <button  onClick={setDis}>

                           {butt}
                    </button>
                </div>

                {<div className="details" ref={inputElem}>
                    <h4 className="details_text">Description</h4>
                    <p className="details_text detail_para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Placeat distinctio dolorem ab dolores cumque sint aliquid
                        dolor itaque, ut sunt assumenda dicta nam repellendus ratione
                        illum sed minus maiores labore?
                    </p>
                    <div className="col">
                        <div className="col1">
                            <h4 className="details_text">Contact Person</h4>
                            <p className="details_text detail_para">{e.name}</p>
                            <h4 className="details_text">Phone</h4>
                            <p className="details_text detail_para detail_extra">
                                {e.phone}
                            </p>
                            <h4 className="details_text">Website</h4>
                            <p className="details_text detail_para detail_extra">
                                {e.website}
                            </p>
                            <h4 className="details_text">Company Name</h4>
                            <p className="details_text detail_para detail_extra">
                                {e.company.name}
                            </p>
                        </div>
                        <div className="col2">
                            <h4 className="details_text">Address</h4>
                            <p className="details_text detail_para">
                                {e.address.street}
                            </p>
                            <h4 className="details_text">Suite</h4>
                            <p className="details_text detail_para detail_extra">
                                {e.address.suite}
                            </p>
                            <h4 className="details_text">City</h4>
                            <p className="details_text detail_para detail_extra">
                                {e.address.city}
                            </p>
                            <h4 className="details_text">Zipcode</h4>
                            <p className="details_text detail_para detail_extra">
                                {e.address.zipcode}
                            </p>
                        </div>
                    </div>
                </div>
                }
           
            </div>
        </div>
    )
}

