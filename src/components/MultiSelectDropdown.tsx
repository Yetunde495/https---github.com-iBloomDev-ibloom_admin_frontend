import { useEffect, useState } from "react";
import SearchDropdown from "./SearchDropdownMenu";
import { AiOutlineClose } from "react-icons/ai";

interface DropDownOption {
  label: string;
  value: any;
  func?: (arg: any) => any;
}
interface Props {
  options: DropDownOption[];
  placeholder?: string;
  label: string;
  disabled?: boolean;
  selectedOptions: DropDownOption[];
  setSelectedOptions: (args: DropDownOption[]) => void;
}

const MultiSelectDropdown = ({
  options,
  label,
  placeholder,
  disabled,
  selectedOptions,
  setSelectedOptions,
}: Props) => {
  const [filteredOptions, setFilteredOptions] =
    useState<DropDownOption[]>(options);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const handleSelect = (option: DropDownOption) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleUnselect = (option: DropDownOption) => {
    setSelectedOptions(
      selectedOptions.filter((item) => item.value !== option.value)
    );
  };

  useEffect(() => {
    // if (selectedOptions) {
    const newFilteredOptions = options.filter((option) => {
      if (selectedOptions.indexOf(option) === -1) {
        return true;
      }
      return false;
    });

    setFilteredOptions(newFilteredOptions);
    // }
  }, [selectedOptions, options]);
  return (
    <div className="w-full">
      <SearchDropdown
        label={label}
        placeholder={placeholder}
        options={filteredOptions}
        onSelect={handleSelect}
        disabled={disabled}
      />
      <div className="my-4 flex flex-wrap gap-1.5">
        {selectedOptions.map((option, index) => (
          <div key={index} className="flex items-center gap-1 rounded-lg border border-primary bg-gray px-2 py-1 text-sm  dark:border-primary dark:bg-form-input">
            {option.label}
            <AiOutlineClose
              onClick={() => handleUnselect(option)}
              className="cursor-pointer text-danger"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
