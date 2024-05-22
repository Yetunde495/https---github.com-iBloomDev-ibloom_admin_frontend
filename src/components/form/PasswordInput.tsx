/* eslint-disable @typescript-eslint/no-explicit-any */
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  rules,
  defaultValue,
  classNames,
  placeholder,
  togglePassword,
  onTogglePassword,
  onChange,
}) => {
  const { field, fieldState } = useController({ name, defaultValue, rules });
  const { value, ref } = field;
  const { error } = fieldState;
  const containerClass = classNames ? "w-full mb-3 " + classNames : "w-full mb-3";

  return (
    <div className={containerClass}>
      <label
        className="mb-[0.4rem] pl-1 block text-base font-cabin text-black dark:text-slate-100"
        htmlFor="password"
      >
        {label}
      </label>
      <div className="relative">
        <input
          {...field}
          ref={ref}
          className={`w-full dark:bg-white border rounded  focus-visible:outline-none focus:border-primary text-[15px] placeholder:text-slate-400  placeholder:text-sm py-3 pl-4.5  pr-3 text-black/90  ${
            error
              ? "border-danger focus:border-[#fda29b] focus:ring-[#fee4e2]"
              : "border-slate-400 focus:ring-[#d4d7ec70]"
          }`}
          type={togglePassword ? "text" : "password"}
          value={value}
          onChange={onChange ? onChange : field.onChange}
          name={name || "password"}
          placeholder={placeholder || "************"}
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
