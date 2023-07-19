import React, { useEffect, useRef, useState } from "react";
import "../style/main.scss";
function Chair({ chair, setCount, setSum }) {
   const [chairCounter, setChairCounter] = useState(0);
   const eventTarget = useRef();

   useEffect(() => {
      if (chairCounter == 1) {
         eventTarget.current.style.background = "green";
      } else if (chairCounter == 2) {
         eventTarget.current.style.background = "orange";
      } else if (chairCounter == 3) {
         eventTarget.current.style.background = "red";
      }
   }, [chairCounter]);

   const changestate = () => {
      setChairCounter((prevChairCounter) => prevChairCounter + 1);
   };

   return (
      <div
         className="chair"
         onClick={(event) => {
            if (chairCounter < 3) {
               changestate(event);
            } else {
               alert("قبلا رزرو شده است");
            }

            if (chairCounter == 2) {
               setCount((prevState) => prevState + 1);
               setSum((prevState) => prevState + chair.price);
            }
         }}
         ref={eventTarget}
         title={chair.price}
      >
         {chair.number}
      </div>
   );
}

export default Chair;
