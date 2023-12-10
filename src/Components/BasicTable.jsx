import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { COLUMNS } from "./Columns";
import { useMemo, useState } from "react";
import Filters from "./Filters";

function BasicTable({ rockets }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => rockets, [rockets]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      sorting,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder ? null : (
                        <div
                          onClick={columnEl.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                          {columnEl.column.getCanSort() ? (
                            <>
                              {{
                                asc: <span className="asc">🔼</span>,
                                desc: <span className="des">🔽</span>,
                              }[columnEl.column.getIsSorted()] ?? (
                                <img
                                  className="sorting-icon"
                                  src="icons8-sort-40.png"
                                />
                              )}
                            </>
                          ) : null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-block">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button
                onClick={() => table.setPageIndex(0)}
                className="page-link "
              >
                Start
              </button>
            </li>
            <li className="page-item ">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="page-link "
              >
                Prev
              </button>
            </li>

            <li className="page-item">
              <button
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
                className="page-link "
              >
                Next
              </button>
            </li>
            <li className="page-item">
              <button
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                className="page-link "
              >
                End
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default BasicTable;
