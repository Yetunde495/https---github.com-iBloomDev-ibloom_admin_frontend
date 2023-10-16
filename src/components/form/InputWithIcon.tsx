import React from "react";
import { FieldValues, useController } from "react-hook-form";


type InputWithIconProps = {
    type?: string;
    label: string;
    name: keyof FieldValues;
    classNames?: string;
    rules?: any;
    error?: string;
    placeholder?: string;
    defaultValue?: string;
    icon?: React.ReactNode;
    leftIcon?: boolean;
    rightIcon?: boolean;
  };
  
 const InputWithIcon: React.FC<InputWithIconProps> = ({
    type,
    label,
    name,
    classNames,
    rules,
    defaultValue,
    placeholder,
    icon,
    leftIcon,
    rightIcon,
  }) => {
    const { field, fieldState } = useController({ name, defaultValue, rules });
    const { onBlur, value, ref, onChange } = field;
    const { error } = fieldState;
  
    const containerClass = classNames
      ? "w-full mb-3" + classNames
      : "w-full mb-3";
  
    return (
      <div className={containerClass}>
        <label
          className="mb-2 block text-sm font-medium text-[#344054] dark:text-slate-100"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="relative">
          {leftIcon ? (
            <span className="absolute left-3 top-4 dark:text-primary">{icon}</span>
          ) : null}
          <input
            className={`w-full dark:bg-meta-4 bg-gray  border focus-visible:outline-none focus:ring-2 rounded-md  placeholder:text-slate-400 placeholder:text-sm py-3 ${rightIcon ? 'pr-9 pl-4' : 'pl-9 pr-4'} text-black  
  
              ${
                error
                  ? "border-[#fda29b] focus:border-[#fda29b] focus:ring-[#fee4e2]"
                  : "border-[#d0d5dd] focus:ring-[#d4d7ec70]"
              } 
                `}
            {...field}
            ref={ref}
            type={type}
            value={value || ""}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
          />
          {rightIcon ? (
            <span className="absolute right-4.5 top-4 dark:text-primary">{icon}</span>
          ) : null}
        </div>
        {error && <small className="text-red-500">{error.message}</small>}
      </div>
    );
  };

export default InputWithIcon;