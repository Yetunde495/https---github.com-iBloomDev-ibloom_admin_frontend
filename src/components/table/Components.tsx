import React from "react";
import Placeholder from "../../assets/images/photo-placeholder.jpeg";

export interface RowPhotoProps {
  photoURL: string;
  desc: string;
}

export const RowPhoto: React.FC<RowPhotoProps> = ({ photoURL, desc }) => (
  <div className="rounded">
    <img src={photoURL || Placeholder} alt={desc} className="object-cover w-35 h-20 rounded-md" />
  </div>
);

export interface ColSortProps {
  onSort: (id: string) => void;
  id: string;
}

export const ColSort: React.FC<ColSortProps> = ({ id, onSort }) => (
  <div
    onClick={() => onSort(id)}
    className="inline-flex flex-col space-y-[2px] absolute pl-2 pt-1.5 cursor-pointer"
  >
    <span className="inline-block">
      <svg
        className="fill-current"
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 0L0 5H10L5 0Z" fill=""></path>
      </svg>
    </span>
    <span className="inline-block">
      <svg
        className="fill-current"
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill=""></path>
      </svg>
    </span>
  </div>
);

export interface SearchTableProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (input: string) => void;
  onSubmit: (e: any) => void;
  searchProps?: any;
}

export const SearchTable: React.FC<SearchTableProps> = ({
  name,
  placeholder,
  onChange,
  onSubmit,
  value,
  searchProps,
}) => (
  <div className="sm:block">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      action="https://formbold.com/s/unique_form_id"
      method="POST"
    >
      <div className="relative">
        <button
          type="submit"
          title="search"
          className="absolute top-1/2 left-0 -translate-y-1/2"
        >
          <svg
            className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
              fill=""
            />
          </svg>
        </button>

        <input
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder={placeholder || "Type to search..."}
          className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
          {...searchProps}
        />
      </div>
    </form>
  </div>
);
export interface PropsChildrenOnly {
  children: React.ReactNode;
}

export const HeaderView: React.FC<PropsChildrenOnly> = ({ children }) => (
  <div
    className="rounded-sm border border-stroke bg-white 
  shadow-default dark:border-strokedark dark:bg-boxdark"
  >
    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
      <div className="grid sm:grid-cols-2">{children}</div>
    </div>
  </div>
);

export interface HeaderViewItemProps {
  children: React.ReactNode;
  isRight?: boolean;
  classNames?: string;
}

export const HeaderViewItem: React.FC<HeaderViewItemProps> = ({
  children,
  // isRight,
  classNames,
}) => <div className={classNames}>{children}</div>;

//NOTE: not in use
export const TableRowWithSearch: React.FC<any> = () => (
  <div className="datatable-top">
    <div className="datatable-dropdown">
      <label>
        <select className="datatable-selector">
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="-1">All</option>
        </select>{" "}
        entries per page
      </label>
    </div>
    <div className="datatable-search">
      <input
        className="datatable-input"
        placeholder="Search..."
        type="search"
        title="Search within table"
        aria-controls="dataTableTwo"
      />
    </div>
  </div>
);

// <tr> <th>item1<th> <th>item2</th> </tr>
export const TableRow: React.FC<PropsChildrenOnly> = ({ children }) => (
  <thead>
    <tr
      className="text-left dark:bg-meta-4 bg-[#95E1D31A]
     border-stroke border-b dark:border-strokedark"
    >
      {/* border-y */}
      {children}
    </tr>
  </thead>
);

//table data: <tbody> - holds collection of table data rows
// <tbody> <tr> <td> <th>item1<td> <<th> </tr> </tbody>
export const TableItems: React.FC<PropsChildrenOnly> = ({ children }) => (
  <tbody>{children}</tbody>
);

export interface RowProps {
  row?: React.ReactNode;
  children?: React.ReactNode;
  rowIndex?: number;
  isLastItem?: boolean;
  rowWidth?: string;
}

//table row item: <th> - holds collection of table row headers
//<th>item</th>
export const Row: React.FC<RowProps> = ({
  row,
  children,
  rowIndex,
  isLastItem,
  rowWidth,
}) => {
  if (rowIndex === 0) {
    return (
      <th
        className={`min-w-[${
          rowWidth || "220px"
        }] py-4 px-4 font-medium text-zinc-500 dark:text-white xl:pl-11`}
      >
        {row || children}
      </th>
    );
  }

  if (isLastItem) {
    return (
      <th className="py-4 px-4 font-medium text-zinc-500 dark:text-white">
        {row || children}
      </th>
    );
  }

  return (
    <th
      className={`'min-w-[${
        rowWidth || "120px"
      }] py-4 px-4 font-medium text-black dark:text-white`}
    >
      {row || children}
    </th>
  );
};

export interface CellProps {
  cell?: React.ReactNode;
  children?: React.ReactNode;
  cellIndex?: number;
  noBorder?: boolean;
  isLink?: boolean;
  isAction?: boolean;
  onNavigate?: React.MouseEventHandler<HTMLButtonElement>;
}

//table cell item: <td> - holds collection of table row headers
//<td>item</td>
export const Cell: React.FC<CellProps> = ({
  cell,
  children,
  cellIndex,
  noBorder,
  isLink,
  isAction,
  onNavigate,
}) => {
  let val = (
    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
      <p className="text-zinc-500 dark:text-white">{cell || children}</p>
    </td>
  );

  if (cellIndex === 0) {
    val = (
      <td
        onClick={(e) => e.stopPropagation()}
        className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11"
      >
        <p className="text-zinc-500 dark:text-white">{cell || children}</p>
      </td>
    );
  }

  if (isAction) {
    val = (
      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
        <div className="text-black dark:text-white">{cell || children}</div>
      </td>
    );
  }

  if (noBorder) {
    val = (
      <td className="py-5 px-4">
        <p className="text-zinc-500 dark:text-white">{cell || children}</p>
      </td>
    );
  }

  if (isLink) {
    val = (
      <td className="border-b border-[#eee] dark:border-strokedark py-5 px-4">
        <div className="flex items-center space-x-3.5">
          <button
            title="onNavigateButton"
            onClick={onNavigate}
            className="hover:text-primary ml-5"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                fill=""
              />
              <path
                d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </td>
    );
  }

  return val;
};

export interface CellRowsProps {
  children: React.ReactNode;
  useSelectOption: boolean; //allow the use of select on the row
  onClick?: React.MouseEventHandler;
}

//table cell items: <tr> - holds collection of table body data
//<tr> <td>item1</td> <td>item2</td> </tr>
export const CellRows: React.FC<CellRowsProps> = ({
  children,
  useSelectOption,
  onClick,
}) => {
  const clickEventHandler = useSelectOption ? () => {} : onClick;
  return (
    <tr onClick={clickEventHandler} className="cursor-pointer">
      {children}
    </tr>
  );
};

export interface RowCheckInputProps {
  id: string;
  isChecked: boolean;
  onChecked: (id: string) => void;
}

//selectable input added to the first <td> on the table
export const RowCheckInput: React.FC<RowCheckInputProps> = ({
  isChecked,
  onChecked,
  id,
}) => (
  <input
    name={isChecked ? id : ""}
    onChange={() => onChecked(id)}
    checked={isChecked}
    title="tr-input"
    type="checkbox"
    className="text-blue-500 border-gray-300 rounded cursor-pointer
      dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 mr-3"
  />
);

export interface StatusCellProps {
  children?: React.ReactNode;
  cell?: React.ReactNode;
  variant?: "success" | "error" | "warning" | "primary" | undefined;
  border?: boolean;
}

//table status cell item: <td> - holds collection of table row headers
//<td>item</td>
export const StatusCell: React.FC<StatusCellProps> = ({
  cell,
  children,
  variant,
  border = true,
}) => {
  let val = (
    <p className="inline-flex rounded-full bg-white bg-opacity-10 py-1 px-3 text-sm font-medium text-black">
      {cell || children}
    </p>
  );

  if (variant === "success") {
    val = (
      <p className="inline-flex rounded-md bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
        {cell || children}
      </p>
    );
  }

  if (variant === "error") {
    val = (
      <p className="inline-flex rounded-md bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
        {cell || children}
      </p>
    );
  }

  if (variant === "warning") {
    val = (
      <p className="inline-flex rounded-md bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
        {cell || children}
      </p>
    );
  }

  if (variant === "primary") {
    val = (
      <p className="inline-flex rounded-md bg-primary bg-opacity-10 py-1 px-3 text-sm font-medium text-primary">
        {cell || children}
      </p>
    );
  }

  return (
    <td
      className={` ${
        border ? "border-b border-[#eee]" : "border-none"
      }  py-5 dark:border-strokedark`}
    >
      {val}
    </td>
  );
};

export interface PaginationProps {
  onNextPage: (page: string | number) => void;
  onPrevPage: (page: string | number) => void;
  onSelectPage: (page: string | number) => void;
  pageLimit: Array<number>;
  prevPage: number;
  nextPage: number;
  activePage: number;
  show: boolean;
  activeLimit: number;
  totalPages?: number;
  onChangeLimit: (limit: string | number) => void;
}

export const Pagination = ({
  onNextPage,
  onPrevPage,
  onSelectPage,
  prevPage,
  nextPage,
  activePage = 1,
  show,
  onChangeLimit,
  activeLimit,
  pageLimit,
  totalPages,
}: PaginationProps) => {
  return show ? (
    <div className="mb-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <div className="col-span-12 flex flex-wrap items-center justify-end gap-3">
          {totalPages && activePage ? (
            <div className="datatable-info">
              <p>
                <span>{activePage}</span> of <span>{totalPages}</span>
              </p>
            </div>
          ) : null}
          <nav>
            <ul className="flex flex-wrap items-center gap-2">
              <li
                onClick={() =>
                  prevPage && Number(prevPage) !== 1
                    ? onPrevPage(Number(prevPage))
                    : onPrevPage(1)
                }
                className="cursor-pointer datatable-pagination-list-item datatable-hidden datatable-disabled"
              >
                <a
                  data-page="1"
                  className="datatable-pagination-list-item-link 
                              rounded bg-[#EDEFF1] py-1.5 px-3 text-xs font-medium text-black hover:bg-primary 
                              hover:text-white dark:text-black dark:hover:bg-primary 
                              dark:hover:text-white"
                >
                  {"‹"}
                </a>
              </li>
              {
                <li onClick={() => onSelectPage(activePage)}>
                  <a
                    className="flex items-center justify-center rounded py-0.5 
                                px-3 font-medium hover:bg-primary hover:text-white bg-primary text-white"
                  >
                    {activePage}
                  </a>
                </li>
              }
              <li
                onClick={() =>
                  nextPage && Number(nextPage) > 1
                    ? onNextPage(Number(nextPage))
                    : onNextPage(1)
                }
                className="disable cursor-pointer datatable-pagination-list-item"
              >
                <a
                  data-page="2"
                  className="datatable-pagination-list-item-link rounded bg-[#EDEFF1] 
                              py-1.5 px-3 text-xs font-medium text-black hover:bg-primary 
                              hover:text-white dark:text-black dark:hover:bg-primary 
                              dark:hover:text-white"
                >
                  {"›"}
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative z-20 inline-block rounded bg-white shadow-card-2 dark:bg-boxdark">
            <select
              title="pageLimit"
              value={activeLimit}
              onChange={(e) => onChangeLimit(e.target.value)}
              name="pageLimit"
              id="pageLimit"
              className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 font-medium text-sm outline-none dark:border-strokedark"
            >
              {pageLimit?.map((pl: number, pli: number) => (
                <option key={pl + "-" + pli} value={pl}>
                  {pl} / Page
                </option>
              ))}
            </select>
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"
                  fill="#64748B"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export interface NoDataProps {
  message?: string;
  title?: string;
  children?: string;
  show: boolean;
  onAdd?: () => void;
  hideButton?: any;
}

export const NoData: React.FC<NoDataProps> = ({
  message,
  title,
  children,
  show,
  onAdd,
  hideButton,
}) => {
  return show ? (
    <div className="rounded-md border flex items-center justify-center min-h-[400px] border-stroke bg-white pb-10 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mt-7.5 text-center">
        <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
          {title}
        </h2>
        <p className="font-medium text-lg">{message || children}</p>
        {hideButton ? null : (
          <div className="mb-10 mt-10 flex flex-col items-center justify-center">
            <button
              onClick={() => (typeof onAdd === "function" ? onAdd() : {})}
              type="button"
              className="flex w-[120px] items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary dark:bg-primary dark:hover:bg-white dark:focus:ring-white"
            >
              <svg
                className="mr-2 h-5 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  ) : null;
};
