/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BsPersonAdd, BsFiletypeXlsx } from "react-icons/bs";
import { FiDownloadCloud } from "react-icons/fi";
import { FaFilter } from "react-icons/fa6";
import {
  AiOutlinePlus,
  AiFillDelete,
  AiOutlineFolderView,
} from "react-icons/ai";
import { BiPrinter, BiEdit } from "react-icons/bi";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  rounded?: boolean;
  size?: "xsm" | "sm" | "md" | "lg" | "default";
  type?: "submit" | "button" | "reset";
  variant?: "primary" | "secondary" | "danger" | "light" | "link" | "transparent" | "white";
  classNames?: string;
  btnProps?: any;
  elevation?: number;
  width?: string;
  height?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

interface ButtonEventProps {
  children?: React.ReactNode;
  disabled?: boolean;
  variant?:
    | "user"
    | "filter"
    | "add"
    | "download"
    | "sheet"
    | "print"
    | "delete"
    | "view"
    | "edit";
  onClick: () => void;
  hide?: boolean;
  bordered?: boolean;
}

export const ButtonEventGroup: React.FC<{
  children: React.ReactNode;
  dir?: "left" | "right";
}> = ({ children, dir }) => (
  <div
    className={`flex flex-row flex-wrap gap-1 items-center ${
      dir === "left" ? "justify-start" : "justify-end"
    }`}
  >
    {children}
  </div>
);

export const ButtonEvent: React.FC<ButtonEventProps> = ({
  variant,
  children,
  disabled,
  onClick,
  hide,
  bordered,
}) => {
  const icon =
    variant === "user" ? (
      <BsPersonAdd />
    ) : variant === "filter" ? (
      <FaFilter />
    ) : variant === "download" ? (
      <FiDownloadCloud />
    ) : variant === "sheet" ? (
      <BsFiletypeXlsx />
    ) : variant === "print" ? (
      <BiPrinter />
    ) : variant === "delete" ? (
      <AiFillDelete />
    ) : variant === "view" ? (
      <AiOutlineFolderView />
    ) : variant === "edit" ? (
      <BiEdit />
    ) : (
      <AiOutlinePlus />
    );
  let cls = `flex flex-row items-center justify-end py-1 px-4 ml-2 cursor-pointer font-medium text-black dark:text-white`;
  cls += bordered ? " border" : "";
  return !hide ? (
    <div
      aria-disabled={disabled}
      onClick={() => (!disabled ? onClick() : () => {})}
      className={cls}
    >
      {icon} &nbsp;&nbsp;{children}
    </div>
  ) : null;
};

export default function Button({
  children,
  text,
  disabled,
  onClick,
  type = "button",
  variant = "primary",
  btnProps,
  rounded = true,
  elevation,
  width,
  height,
  size,
}: ButtonProps) {
  const bgColor =
    variant === "primary"
      ? "bg-primary  text-white"
      :  variant === "white"
      ? "bg-[#fefefe]  text-primary border border-primary"
      : variant === "secondary"
      ? "bg-[#00112c] text-white"
      : variant === "danger"
      ? "bg-meta-1 text-white"
      : variant === "link"
      ? "bg-transparent text-black border-b-2 border-primary rounded-none py-0"
      : variant === "transparent"
      ? "bg-transparent text-black hover:bg-slate-200 border border-slate-300"
      : "bg-gray text-black";
  const btnSize = size === "default" ? "py-2 px-8 " : "py-3 px-12 "
  const roundedBtn = rounded ? "rounded-full" : "rounded-md"
  let btnCls = `flex justify-center gap-2.5 items-center transition disabled:opacity-65 opacity-95 hover:opacity-100 ${bgColor} ${btnSize} ${roundedBtn} font-semibold `;
  // btnCls = size === 'xsm' ? btnCls +' w-10' : size === 'sm' ? btnCls +' w-32' : size === 'md' ? btnCls + ' w-64' : size === 'lg' ? btnCls + ' w-128': btnCls + ' w-100';
  btnCls = elevation ? btnCls + " hover:shadow-" + elevation : btnCls;
  btnCls = width ? btnCls + " w-" + width : btnCls;
  btnCls = height ? btnCls + " h-" + height : btnCls;

  return (
      <button
        disabled={disabled}
        aria-disabled={disabled}
        onClick={onClick}
        className={btnCls}
        type={type}
        {...btnProps}
      >
        {text || children}
      </button>
  );
}
