import "./App.css";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect,useRef } from "react";
function App() {
  const [data, setData] = useState([]);
  let [number, setNumber] = useState(0);
  let [final, setFinal] = useState(0);
  const inputElem = useRef(1);
  let [display, setDisplay] = useState(0);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(( )=>{
    axios
    .get(url)
    .then((res) => {
      setData(res.data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  },[])
  
  function moveLeft() {
    if (number - 3 >= 0) {
      number = number - 3;
      setNumber(number);
      setFinal(number - 3);
    }
  }
  function moveRight() {
    number = number + 3;
    setNumber(number);
    final = number + 3;
  }
  var dis = 0;
  function setDis(  ){
    console.log(inputElem.current)
        inputElem.current.style.display="block"

  }
  return (
    <>
      {data.map((e) => {
       
        final = number + 3;
        if (e.id > number && e.id <= final) {
          return (
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
                <button onClick={setDis}>view details</button>
              </div>
              {/* {
                (() => {
                    if(e.id==display) {
                            return (
                                <p>Hi</p>
                            )
                        } 
                })()  
            }   */}

              <div className="details" ref={inputElem}>
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
            </div>
          );
        }
      })}
      <div className="butt">
        <button onClick={moveLeft}> Left</button>
        <button onClick={moveRight}>Right</button>
      </div>
    </>
  );
}
export default App;
