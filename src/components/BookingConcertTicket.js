import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/main.scss";
import Section from "./Section";
export const dataChairsContext = React.createContext();

const BookingConcertTicket = () => {
   const [data, setData] = useState([]);
   const [count, setCount] = useState(0);
   const [sum, setSum] = useState(0);
   const [sections, setSections] = useState(["B", "A", "C", "D"]);

   useEffect(() => {
      axios.get("/chairs.json").then((response) => setData(response.data));
   }, []);

   return (
      <>
         <div>
            <div className="stage">
               <h1>stage</h1>
            </div>
            <div className="factor">
               <h3>CounterChair:</h3> <div className="counter">{count}</div>
               <h3>TotalPrice:</h3> <div className="total-Price">{sum}</div>
            </div>
            <div className="chairs-grid">
               {sections.map((section, index) => (
                  <dataChairsContext.Provider value={data} key={index}>
                     <Section
                        section={section}
                        setCount={setCount}
                        setSum={setSum}
                     ></Section>
                  </dataChairsContext.Provider>
               ))}
            </div>
         </div>
      </>
   );
};

export default BookingConcertTicket;
