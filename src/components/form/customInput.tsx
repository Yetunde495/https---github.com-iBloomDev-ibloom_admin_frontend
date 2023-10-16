import React from "react";
import { FieldValues, useController } from "react-hook-form";

type InputProps = {
  label: string;
  type?:string;
  name: string;
  rules?: any;
  onKeyDown?: any;
  classNames?: string;
  placeholder?: string;
  defaultValue?: string;
  defValue?: string | number;
  formatValue?: (value: string) => string;
  OnChange?: (value: string) => void;
};

type TextInputProps = {
  type?:string;
  label: string;
  name: keyof FieldValues;
  classNames?: string;
  rules?: any;
  error?: string;
  defValue?: string | number;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
}

export const AutoInput: React.FC<TextInputProps> = ({ type, disabled=false, defValue, label, name,  classNames, placeholder, defaultValue, rules }) => {
  

  const { field, fieldState } = useController({ name, defaultValue,  rules });
  const { onBlur, value, ref, onChange } = field;
  const { error } = fieldState;

  const errorData = error ? ' border-danger' : '';
  const containerClass = classNames ? 'w-full ' + classNames : 'w-full';

  
  return (
    <div className={containerClass}>
      <label htmlFor={name} className="mb-3 block text-black dark:text-white">
        {label}
      </label>
      <input
        {...field}
        disabled={disabled}
        ref={ref}
        type={type}
        value={value || defValue || ''}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        className={`w-full rounded border border-stroke bg-gray py-3 px-4.5 
        text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
        dark:bg-meta-4 dark:text-white dark:focus:border-primary${errorData}`}
      
      />
      {error && <small className='text-danger'>{error.message}</small>}
    </div>
    );
  };

const Input: React.FC<InputProps> = ({ label, name, rules, classNames, defaultValue, onKeyDown, type, placeholder, OnChange, defValue }) => {
  const { field, fieldState } = useController({ name, defaultValue,  rules });
  const {onChange, onBlur, value, ref } = field;
  const { error } = fieldState;

  const containerClass = classNames ? 'w-full ' + classNames : 'w-full';
  const errorData = error ? ' border-danger' : '' 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    typeof OnChange === 'function' ? OnChange(newValue) : {}
  };
 
  return (
    <div className={containerClass}>
      <label
        htmlFor={name}
        className="mb-3 block text-black dark:text-white"
      >
        {label}
      </label>
      <input
        {...field}
        defaultValue={defaultValue || ''}
        onBlur={onBlur}
        onChange={handleChange}
        value={value || defValue || ''}
        onKeyDown={onKeyDown}
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded border border-stroke bg-gray py-3 px-4.5 
        text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
        dark:bg-meta-4 dark:text-white dark:focus:border-primary${errorData}`}
      />
       {error && <small className='text-danger'>{error.message}</small>}
    </div>
  );
};

export default Input;
