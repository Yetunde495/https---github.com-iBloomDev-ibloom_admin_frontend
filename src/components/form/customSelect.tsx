/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useController } from "react-hook-form";

type SelectProps = {
  label: string;
  name: string;
  rules?: any;
  defaultValue?: string;
  classNames?: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({
  label,
  name,
  rules,
  children,
  classNames,
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
      <label htmlFor={name} className="mb-2.5 block text-black dark:text-white">
        {label}
      </label>
      <select
        id={name}
        name={name}
        onChange={handleValueChange}
        defaultValue={defaultValue}
        onBlur={onBlur}
        value={value}
        ref={ref}
        className="relative z-20 w-full rounded 
        border border-slate-400 py-3 px-5 outline-none 
        transition bg-gray focus:border-primary active:border-primary 
        dark:border-form-strokedark dark:bg-form-input 
        dark:focus:border-primary"
      >
        {children}
      </select>
      {error && <small className="text-danger">{error.message}</small>}
    </div>
  );
};

export default Select;
