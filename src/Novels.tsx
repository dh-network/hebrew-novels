import {useContext} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
// import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {NovelsContext} from './context';
import {Novel} from './types';

function formatTitle (_: string, novel: Novel) {
  const {title, id} = novel;
  return (
    <Link className="text-lg" to={id}>{title}</Link>
  );
}

export default function Novels () {
  const {novels} = useContext(NovelsContext);

  const data = novels.map((n: Novel) => {
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
    dataField: 'numPages',
    text: 'Pages',
    sort: true,
  }];

  return (
    <div>
      <Helmet>
        <title>Novels</title>
      </Helmet>
      <section>
        <h1>Novels</h1>

        <BootstrapTable
          bootstrap4
          keyField="id"
          columns={columns}
          data={data}
          defaultSorted={[
            { dataField: 'author', order: 'asc' }
          ]}
          defaultSortDirection="asc"
        />
      </section>
    </div>
  );
}
