import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { usePagination, useTable } from "react-table";
import styles from "./Table.module.css";

const Table = ({
  tableClassName,
  headerRowClassName,
  bodyRowClassName,
  columnHeaderClassName,
  columns,
  data,
  onRowClick = null,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    pageOptions,
    gotoPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  return (
    <>
      <table className={tableClassName} {...getTableProps}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className={headerRowClassName} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className={columnHeaderClassName} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                className={bodyRowClassName}
                onClick={onRowClick ? () => onRowClick(row.original) : null}
                {...row.getRowProps()}
              >
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <section className={styles.paginationContainer}>
        <button className={styles.paginationButton} onClick={() => previousPage()} disabled={!canPreviousPage}>
          <MdArrowBackIos />
        </button>
        {pageOptions.map(option => (
          <button
            className={styles.paginationPageButton}
            onClick={() => gotoPage(option)}
            disabled={pageIndex === option}
          >
            {option + 1}
          </button>
        ))}
        <button className={styles.paginationButton} onClick={() => nextPage()} disabled={!canNextPage}>
          <MdArrowForwardIos />
        </button>
      </section>
    </>
  );
};

export default Table;