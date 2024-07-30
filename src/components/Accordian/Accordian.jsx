import React, { useState } from 'react'
import './Accordian.css'
import { IoIosArrowDown } from "react-icons/io";

const Accordian = ({item}) => {
    const [isOpen , setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };
  return (
    <>
        <div className='box-primary'>
            <div className='box-wrap'>
                <div className='bp-image'>
                    <div className='user-image'><img src = {item.picture} alt = 'userLogo' /></div>
                        <span className='label'>{item.first} {item.last}</span>
                    </div>
                    <div className={`accordian ${isOpen ? "open" : "close"}`} onClick={toggleAccordion}>
                      <div className='accordian-icon'><IoIosArrowDown /></div>
                </div>
            </div>
            <div className={`accordian-content ${isOpen ? "open" : ""}`}>
                <div className='accordian-insider'>
                    <div className='age-box'>
                        <span>Age</span>
                        <span>19 years</span>
                    </div>
                    <div className='age-box'>
                        <span>Gender</span>
                        <span>{item.gender}</span>
                    </div>
                    <div className='age-box'>
                        <span>Country</span>
                        <span>India</span>
                    </div>
                </div>
                <div className='description-accordian'>
                    <label>Description</label>
                    <span>{item.description}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Accordian