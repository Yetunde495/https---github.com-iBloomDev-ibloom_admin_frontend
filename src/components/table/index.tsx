import { 
  PropsChildrenOnly,
  RowPhotoProps,
  RowPhoto,
  ColSortProps,
  ColSort,
  SearchTableProps,
  SearchTable,
  HeaderView,
  HeaderViewItemProps,
  HeaderViewItem,
  TableRow,
  TableItems,
  RowProps,
  Row,
  CellProps,
  Cell,
  CellRowsProps,
  CellRows,
  RowCheckInputProps,
  RowCheckInput,
  StatusCellProps,
  StatusCell,
  PaginationProps,
  Pagination,
} from './Components';

interface TableProps {
  children: React.ReactNode;
  show?: boolean;
}

const Table : React.FC<TableProps> & {
  Photo: React.FC<RowPhotoProps>;
  SortCol: React.FC<ColSortProps>;
  SearchTable: React.FC<SearchTableProps>;
  HeaderView: React.FC<PropsChildrenOnly>;
  HeaderViewItem: React.FC<HeaderViewItemProps>;
  TableRow: React.FC<PropsChildrenOnly>;
  TableItems: React.FC<PropsChildrenOnly>;
  Row: React.FC<RowProps>;
  Cell: React.FC<CellProps>;
  CellRows: React.FC<CellRowsProps>;
  RowCheckInput: React.FC<RowCheckInputProps>;
  StatusCell: React.FC<StatusCellProps>;
  Pagination: React.FC<PaginationProps>;
} = ({ children, show }) => {
  return show ?  (
    <div className='rounded-sm border border-stroke bg-white 
    px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark 
    dark:bg-boxdark sm:px-7.5 xl:pb-1'>
      <div className='max-w-full overflow-x-auto pb-12'>
        <table className='w-full table-auto'>
          {children}
        </table>
      </div>
    </div>
  ): null
}

Table.Photo = RowPhoto;
Table.SortCol = ColSort;
Table.SearchTable = SearchTable;
Table.HeaderView = HeaderView;
Table.HeaderViewItem = HeaderViewItem;
Table.TableRow = TableRow;
Table.TableItems = TableItems;
Table.Row = Row;
Table.Cell = Cell;
Table.CellRows = CellRows;
Table.RowCheckInput = RowCheckInput;
Table.StatusCell = StatusCell;
Table.Pagination = Pagination;

export default Table;
