import './Search.css'
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from 'react';
import Accordian from '../Accordian/Accordian';


const Search = () => {
  const [inputValue,setInputValue] = useState('')
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/celebrities.json')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error('Error : ' , error))
  })

  const searchUsers = users.filter((row) => 
    Object.values(row).some((value) => 
      value.toString().toLowerCase().includes(inputValue.toLowerCase())
  ))
  return (
    <>
        <div>
          <div className='user-box'>
            <span className='label'>List View</span>
            <div className='search-box'>
              <span><CiSearch /></span>
              <input type = 'text' placeholder='Search user' className='search-input' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            {searchUsers.map((item,index) => (
              <Accordian key = {index} item = {item}/>
            ))}
          </div>
        </div>
    </>
  )
}

export default Search