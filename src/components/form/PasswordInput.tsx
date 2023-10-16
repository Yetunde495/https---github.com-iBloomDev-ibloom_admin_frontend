import React from "react";
import { FieldValues, useController } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";

type PasswordInputProps = {
  type?: string;
  label: string;
  name: keyof FieldValues;
  classNames?: string;
  rules?: any;
  error?: string;
  placeholder?: string;
  defaultValue?: string;
  togglePassword: boolean;
  onTogglePassword: (val: boolean) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  rules,
  defaultValue,
  classNames,
  placeholder,
  togglePassword,
  onTogglePassword,
}) => {
  const { field, fieldState } = useController({ name, defaultValue, rules });
  const { value, ref, onChange } = field;
  const { error } = fieldState;
  const containerClass = classNames ? "w-full mb-3 " + classNames : "w-full mb-3";

  return (
    <div className={containerClass}>
      <label
        className="mb-3 block text-sm font-medium text-[#344054] dark:text-slate-100"
        htmlFor="password"
      >
        {label}
      </label>
      <div className="relative">
        <input
          {...field}
          ref={ref}
          className={`w-full dark:bg-meta-4 border border-stroke bg-gray focus-visible:outline-none focus:ring-2 rounded-md placeholder:text-slate-400 placeholder:text-sm py-3  px-4 text-black  ${
            error
              ? "border-[#fda29b] focus:border-[#fda29b] focus:ring-[#fee4e2]"
              : "border-[#d0d5dd] focus:ring-[#d4d7ec70]"
          }`}
          type={togglePassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          name={name || "password"}
          placeholder={placeholder || "*******"}
        />
        <span className="absolute right-4 top-4 dark:text-primary">
          {togglePassword ? (
            <div>
              <span
                className="font-bold cursor-pointer"
                onClick={() => onTogglePassword(!togglePassword)}
              >
                <BsEye />
              </span>
            </div>
          ) : (
            <div>
              <span
                className="font-bold cursor-pointer"
                onClick={() => onTogglePassword(!togglePassword)}
              >
                <BsEyeSlash />
              </span>
            </div>
          )}
        </span>
      </div>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

export default PasswordInput;
