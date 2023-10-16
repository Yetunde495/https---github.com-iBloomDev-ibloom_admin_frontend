import React, { useState } from 'react';

type SearchOption = {
  label: string;
  value: string;
};

type SearchBarProps = {
  options: SearchOption[];
  onSearch: (searchValue: string, selectedOption: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ options, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = () => {
    onSearch(searchValue, selectedOption);
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

//   React.useEffect(() => {
//  if (searchValue === '') {
//   setSelectedOption('All')
//  }
//   }, [searchValue])
React.useEffect(() => {
  handleSearch();
}, [searchValue]);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        className="pl-4 pr-4 py-2 w-full bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex items-center p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <span className="mr-1">{selectedOption}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 6.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 4.414V15a1 1 0 11-2 0V4.414L5.707 6.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-25 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
              {options.map((option) => (
                <div
                  key={option.value}
                  className="py-1 px-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionChange(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
