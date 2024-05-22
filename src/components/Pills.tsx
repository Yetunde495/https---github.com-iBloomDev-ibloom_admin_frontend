import React from "react";
interface StatusCellProps {
  children?: React.ReactNode;
  variant?: "success" | "error" | "warning" | "primary" | undefined;
}
// {[{name string, value: any }]} -  pills
const Pills: React.FC<any> = ({ pills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
      {pills.map((p: any, i: number) => {
        return (
          <span
            key={p + "" + i}
            className={`bg-primary/5 flex items-center justify-center rounded-full text-primary py-1 px-3 text-[12px]`}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export const StatusPill: React.FC<StatusCellProps> = ({
  children,
  variant,
}) => {
  let val = (
    <p className="rounded-full bg-white bg-opacity-10 py-1 px-3 text-sm font-medium text-black">
      {children}
    </p>
  );

  if (variant === "success") {
    val = (
      <p className="rounded-md bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
        {children}
      </p>
    );
  }

  if (variant === "error") {
    val = (
      <p className="rounded-md bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
        {children}
      </p>
    );
  }

  if (variant === "warning") {
    val = (
      <p className="rounded-md bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
        {children}
      </p>
    );
  }

  if (variant === "primary") {
    val = (
      <p className="rounded-md bg-primary bg-opacity-10 py-1 px-3 text-sm font-medium text-primary">
        {children}
      </p>
    );
  }

  return (
      <div>{val}</div>
  )
};

export default Pills;
