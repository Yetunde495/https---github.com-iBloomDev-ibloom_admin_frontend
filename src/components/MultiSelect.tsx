import React, { useState } from 'react';

export interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  onChange: (selectedOptions: Option[]) => void;
  label?: string;
  defaultValues?: string[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onChange, label, defaultValues }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOption = (option: Option) => {
    const isSelected = selectedOptions.some((selectedOption) => selectedOption.value === option.value);

    if (isSelected) {
      const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption.value !== option.value);
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

const handleOptionClick = (option: Option) => {
    toggleOption(option);
    const updatedSelectedOptions = selectedOptions.some((selectedOption) => selectedOption.value === option.value)
      ? selectedOptions.filter((selectedOption) => selectedOption.value !== option.value)
      : [...selectedOptions, option];
    onChange(updatedSelectedOptions);
  };
  

  const handleClearOption = (option: Option) => {
    const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption.value !== option.value);
    setSelectedOptions(updatedOptions);
  };

  const clearAllOptions = () => {
    setSelectedOptions([]);
  };

  React.useEffect(() => {
    if (defaultValues && defaultValues.length > 0) {
      const defaultSelectedOptions = options.filter(option => defaultValues.includes(option.value));
      setSelectedOptions(defaultSelectedOptions);
    }
  }, [defaultValues, options]);
  return (
    <div className="relative w-full">
      <h3 className="text-lg font-bold text-left mb-2">{label}</h3>
      <div
        className="border bg-gray py-3 px-5 outline-none border-stroke
        transition focus:border-primary active:border-primary 
        dark:border-form-strokedark dark:bg-form-input 
        dark:focus:border-primary rounded  p-3 cursor-pointer flex items-center justify-between"
        onClick={toggleDropdown}
      >
        {selectedOptions.length === 0 ? 'Select options' :<div className="flex flex-wrap gap-1">
          {selectedOptions.map((option) => (
            <div key={option.value} className="bg-primary text-white rounded-full py-1 px-2 flex items-center">
              <span className="mr-1">{option.label}</span>
              <button
                className="text-white font-bold text-sm ml-1 focus:outline-none"
                onClick={() => handleClearOption(option)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>}
        <svg
          className={`h-5 w-5 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-[9999] mt-2 w-full bg-white dark:bg-form-input border border-stroke dark:border-strokedark rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex items-center px-4 py-2  hover:bg-gray-100 cursor-pointer ${
                selectedOptions.some((selectedOption) => selectedOption.value === option.value)
                  ? 'bg-primary text-white'
                  : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <input
                type="checkbox"
                className="mr-3 h-5 w-5 rounded-sm"
                checked={selectedOptions.some((selectedOption) => selectedOption.value === option.value)}
                readOnly
              />
              <span>{option.label}</span>
            </div>
          ))}
          {selectedOptions.length > 0 && (
            <div className="flex items-center justify-end p-3">
              <button
                className="text-blue-500 font-bold text-sm focus:outline-none"
                onClick={clearAllOptions}
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

