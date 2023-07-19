import React, { useContext } from "react";
import "../style/main.scss";
import { dataChairsContext } from "./BookingConcertTicket";
import Chair from "./Chair";

const Section = ({ section, setCount, setSum }) => {
   return (
      <>
         <div className="section">
            <div className={`section-${section}`}>
               {useContext(dataChairsContext)
                  .filter((chair) => chair.section === section)
                  .map((chair) => (
                     <Chair
                        key={chair.number}
                        chair={chair}
                        setCount={setCount}
                        setSum={setSum}
                     />
                  ))}
            </div>
         </div>
      </>
   );
};

export default Section;
