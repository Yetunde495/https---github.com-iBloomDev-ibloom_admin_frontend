// SearchDropdown.tsx
import React, { useEffect, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

export interface DropDownOption {
  label: string;
  value: any;
  func?: (arg: any) => any;
}

interface SearchDropdownProps {
  options: DropDownOption[];
  onSelect: (selectedOption: DropDownOption) => void;
  placeholder?: string;
  label: string;
  disabled?: boolean;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  options,
  onSelect,
  placeholder,
  label,
  disabled,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<DropDownOption[]>([]);
  const [filteredOptions, setFilteredOptions] =
    useState<DropDownOption[]>(options);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const menuRef = useOutsideClick(() => setShowMenu(false));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterOptions(searchTerm);
  };

  const filterOptions = (searchTerm: string) => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option: DropDownOption) => {
    const newSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);
    onSelect(option);
    setSearchTerm("");
    setShowMenu(false);
  };

  const removeSelectedOption = (option: DropDownOption) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
  };

  return (
    <div ref={menuRef} className={`relative z-${showMenu ? "30" : "0"} `}>
      <label className="mb-2.5 block text-black dark:text-white">{label}</label>
      <div className="relative cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <input
          type="text"
          disabled={disabled}
          placeholder={placeholder || "Search..."}
          className={`relative z-${
            showMenu ? "20" : "0"
          } w-full appearance-none rounded 
                    border border-stroke bg-gray px-5 py-3 
                    outline-none transition focus:border-primary active:border-primary 
                    dark:border-form-strokedark dark:bg-form-input 
                    dark:focus:border-primary`}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowMenu(true)}
        />
        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill=""
              ></path>
            </g>
          </svg>
        </span>
      </div>

      {showMenu && (
        <ul className="border-gray-300 absolute left-0 top-16 z-999 mt-3 max-h-[400px] w-full overflow-y-auto rounded-md border bg-white py-2 shadow-lg dark:bg-black">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="hover:bg-gray-100 cursor-pointer px-4 py-2"
              >
                {option.label}
              </li>
            ))
          ) : (
            <div className="flex h-20 items-center justify-center text-lg font-bold">
              No more options
            </div>
          )}
        </ul>
      )}
       <div className="flex mt-2">
        {selectedOptions.map((option, index) => (
          <div key={index} className="flex items-center bg-gray-200 rounded-md px-2 mr-2">
            <span>{option.label}</span>
            <button className="ml-1" onClick={() => removeSelectedOption(option)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;
