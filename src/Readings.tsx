import {useContext, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {NovelsContext} from './context';
import { Reading } from './types';

export default function Readings () {
  const {readings} = useContext(NovelsContext);

  const data = readings.map((n: Reading) => {
    return {...n};
  });

  const columns = useMemo<ColumnDef<Reading>[]>(
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
        accessorKey: 'nliId',
        header: 'NLI ID',
        cell: info => (
          <Link to={`/novels/${info.getValue()}`}>
            {`${info.getValue()}`}
          </Link>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Helmet>
        <title>Readings</title>
      </Helmet>
      <section>
        <h1>Readings</h1>
        <table dir="rtl">
          <thead className=" text-gray-700 bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="py-3 px-2 text-right">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
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
