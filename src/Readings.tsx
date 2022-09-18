import {useContext} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import {NovelsContext} from './context';
import { Reading } from './types';

function formatTitle (_: string, reading: Reading) {
  const {title, id} = reading;
  return (
    <Link className="text-lg" to={id}>{title}</Link>
  );
}

function formatNliId (_: string, reading: Reading) {
  const {nliId} = reading;
  return (
    <Link to={`/novels/${nliId}`}>{nliId}</Link>
  );
}

export default function Readings () {
  const {readings} = useContext(NovelsContext);

  const data = readings.map((n: Reading) => {
    return {...n};
  });

  const columns = [{
    dataField: 'title',
    text: 'Title',
    formatter: formatTitle,
    sort: true,
  }, {
    dataField: 'author',
    text: 'Author',
    sort: true,
  }, {
    dataField: 'publisher',
    text: 'Publisher',
    sort: true,
  }, {
    dataField: 'publicationYear',
    text: 'Year',
    sort: true,
  }, {
    dataField: 'nliId',
    text: 'NLI ID',
    formatter: formatNliId,
    sort: false,
  }];

  return (
    <div>
      <Helmet>
        <title>Readings</title>
      </Helmet>
      <section>
        <h1>Readings</h1>

        <BootstrapTable
          bootstrap4
          keyField="id"
          columns={columns}
          data={data}
          defaultSorted={[
            { dataField: 'title', order: 'asc' }
          ]}
          defaultSortDirection="asc"
        />
      </section>
    </div>
  );
}
