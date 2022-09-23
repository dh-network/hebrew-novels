import {useContext, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {NovelsContext} from './context';
import {Novel} from './types';
import DebouncedInput from './DebouncedInput';

export default function Novels () {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const {novels} = useContext(NovelsContext);
  const [data] = useState<Novel[]>([...novels]);

  const columns = useMemo<ColumnDef<Novel>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'Title',
        cell: info => (
          <Link className="text-lg" to={info.row.original.id}>
            {`${info.getValue()}`}
          </Link>
        ),
      },
      {
        accessorKey: 'author',
        header: 'Author',
      },
      {
        accessorKey: 'publisher',
        header: 'Publisher',
      },
      {
        accessorKey: 'publicationYear',
        header: 'Year',
      },
      {
        accessorKey: 'numPages',
        header: 'Pages',
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
  });

  return (
    <div>
      <Helmet>
        <title>Novels</title>
      </Helmet>
      <section>
        <h1>Novels</h1>
        <div dir="rtl" className="mb-2">
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            className="p-1"
            placeholder="Search all columns..."
          />
          <span className="mr-2" dir="ltr">
            {globalFilter === '' ? (table.getRowModel().rows.length) : (
              `${table.getRowModel().rows.length} of ${data.length}`
            )}
          </span>
        </div>
        <table dir="rtl" className="w-full">
          <thead className=" text-gray-700 bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="py-3 px-2 text-right"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="bg-white border-b">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-1 px-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
