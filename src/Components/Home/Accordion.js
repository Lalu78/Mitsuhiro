import React, { useState } from "react";
// import "./accordion.css";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item mb-4">
      <div className="accordion-toggle cursor-pointer border-b border-[#F7911E] " onClick={() => setIsActive(!isActive)}>
      <div className="flex justify-between items-center gap-2 ">
            <h3 className="text-sm font-medium md:text-base">{heading}</h3> 
            <img src='/images/arrowDown.svg' className={`${isActive ? 'rotate-180' : ''} h-4 w-4 md:h-5 md:w-5`} />
      </div>
      {isActive && <div className="accordion-content text-sm">{content}</div>}
      </div>
    </li>
  );
};

export default Accordion;















// import { useState } from 'react';
// import FAQData from '../../Data/FAQData'

// function Accordion({ label, children, className }) {
//     const [showInfo, setShowInfo] = useState(false);
//     const [isActive, setIsActive] = useState(false);
//     const [toggle, setToggle] = useState(false);

//     let handleToggle=(id)=>{
//         const newId=FAQData.filter((e)=>e.id)
//         console.log('id',id)
//         // console.log('newId',newId.id)
//         if(newId===id){
//             setToggle(true);
//             return false
//         }
//     //    setToggle(true)
       
//     }
//     // console.log("id",toggle)
//     return (
//         <div className={`${className} `}>
//             {
//                 FAQData.map((data) => {
//                     const { Q, A,id } = data
//                     return (<>
//                         <div  onClick={() => handleToggle(id)}className='h-auto p-4 items-center cursor-pointer border-b border-[#F7911E]' >
//                             <div className='flex justify-between ' >
//                                 <div type='label'>{Q}</div>
//                                 <img src='/images/arrowDown.svg' className={`${showInfo ? 'rotate-180' : ''}`} />
//                             </div>
//                             {toggle &&
//                                 <div className='text-sm mt-2'>
//                                     {A}
//                                 </div>}
//                         </div>
//                     </>)
//                 })
//             }
//         </div>
//     )
// }

// export default Accordion