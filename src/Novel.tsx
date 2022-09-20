import { useContext } from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from "react-router-dom";
import { NovelsContext } from './context';

export default function Novel () {
  const { id } = useParams<{id: string}>();
  const { novels } = useContext(NovelsContext);

  const novel = novels.find(n => n.id === id);

  return (
    <div>
      <Helmet>
        <title>Novel: {id}</title>
      </Helmet>
      <section dir="rtl">
        <h1>{novel?.title}</h1>
        <table>
          <tbody>
            <tr>
              <th align="right">Author</th>
              <td>{novel?.author}</td>
            </tr>
            <tr>
              <th align="right">Publisher</th>
              <td>{novel?.publisher}</td>
            </tr>
            <tr>
              <th align="right">Number of Pages</th>
              <td>{novel?.numPages}</td>
            </tr>
            <tr>
              <th align="right">ID</th>
              <td>{novel?.id}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
