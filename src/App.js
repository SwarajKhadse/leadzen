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
                    <Card e={e} />
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
