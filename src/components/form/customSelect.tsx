/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useController } from "react-hook-form";

type SelectProps = {
  label: string;
  name: string;
  rules?: any;
  defaultValue?: string;
  classNames?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
};

const Select2: React.FC<SelectProps> = ({
  label,
  name,
  rules,
  children,
  classNames,
  disabled,
  onChange,
  defaultValue,
}) => {
  const { field, fieldState } = useController({ name, rules, defaultValue });
  const { onChange: onControllerChange, onBlur, value, ref } = field;
  const { error } = fieldState;

  const containerClass = classNames ? "w-full " + classNames : "w-full";

  const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onControllerChange(selectedValue); // Call the onChange function from useController
    onChange?.(selectedValue); // Call the onChange prop if it is provided
  };
  return (
    <div className={containerClass}>
      <label htmlFor={name} className="mb-2.5 block text-black">
        {label}
      </label>
      <div className={`${!disabled ? "bg-white" : "bg-slate-100"} relative z-20`}>
      <select
        id={name}
        name={name}
        onChange={handleValueChange}
        defaultValue={defaultValue}
        onBlur={onBlur}
        disabled={disabled}
        value={value}
        ref={ref}
        className="relative z-20 w-full rounded min-h-[50px] appearance-none
        border border-[#d0d5dd] py-3 px-5 outline-none
        transition focus:border-primary active:border-primary"
      >
        {children}
      </select>
      {!disabled && <span className="absolute top-1/2 pointer-events-none right-4 z-30 bg-white -translate-y-1/2 ">
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
      </span>}
        </div>
      {error && <small className="text-danger">{error.message}</small>}
    </div>
  );
};

export default Select2;
