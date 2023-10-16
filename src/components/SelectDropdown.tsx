import React, { useState, useEffect, useRef } from 'react';
import {GrLocation} from 'react-icons/gr'
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
// const DropdownSelect = ({list, active, onSelect}) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false)

//   const trigger = useRef(null)
//   const dropdown = useRef(null)

//   // close on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }) => {
//       if (!dropdown.current) return
//       if (
//         !dropdownOpen ||
//         dropdown.current.contains(target) ||
//         trigger.current.contains(target)
//       )
//         return
//       setDropdownOpen(false)
//     }
//     document.addEventListener('click', clickHandler)
//     return () => document.removeEventListener('click', clickHandler)
//   })

//   // close if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = ({ keyCode }) => {
//       if (!dropdownOpen || keyCode !== 27) return
//       setDropdownOpen(false)
//     }
//     document.addEventListener('keydown', keyHandler)
//     return () => document.removeEventListener('keydown', keyHandler)
//   })

//   return (
//     <div className='relative'>
//       <button ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)}>
//         <svg
//           width='18'
//           height='18'
//           viewBox='0 0 18 18'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//             <path d="M2.25 7.5L9 13.5L15.75 7.5H2.25Z" fill="#98A6AD"/>
          
//         </svg>
//         <span>{active ? active: 'Select'}</span>
//       </button>
//       <div
//         ref={dropdown}
//         onFocus={() => setDropdownOpen(true)}
//         onBlur={() => setDropdownOpen(false)}
//         className={`right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${
//           dropdownOpen === true ? 'block' : 'hidden'
//         }`}
//       >
//         {
//             list?.map((ls, idx) => (
//                 <button onClick={() => {
//                     onSelect(ls)
//                     setDropdownOpen(false)
//                 }} key={idx+''+ls} className='flex w-full items-center gap-2 rounded-sm py-1.5 px-4 text-left text-sm hover:bg-gray dark:hover:bg-meta-4'>
//                     <GrLocation />
//                     {ls?.substring(0, 1)?.toUpperCase()+''+ls?.substring(1)}
//                 </button>
//             ))
//         }
//       </div>
//     </div>
//   )
// }

const DropdownSelect = ({ }) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
