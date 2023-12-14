import React from "react";
import { BsPersonAdd, BsFiletypeXlsx } from "react-icons/bs";
import { FiFilter, FiDownloadCloud } from "react-icons/fi";
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
  size?: "xsm" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger" | "light" | "link";
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
    ) : variant === "" ? (
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
  size,
  variant = "primary",
  classNames,
  btnProps,
  elevation,
  width,
  height,
}: ButtonProps) {
  let cls = classNames
  let bgColor =
    variant === "primary"
      ? "bg-primary  text-white"
      : variant === "secondary"
      ? "bg-[#00112c] text-white"
      : variant === "danger"
      ? "bg-meta-1 text-white"
      : variant === "link"
      ? "bg-transparent text-black border-b-2 border-primary rounded-none py-0"
      : "bg-gray text-black";
  let btnCls = `flex justify-center transition disabled:opacity-65 opacity-95 hover:opacity-100 ${bgColor} rounded-md py-2 px-6 font-medium `;
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
        type="submit"
        {...btnProps}
      >
        {text || children}
      </button>
  );
}
