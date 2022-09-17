import {useContext} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {NovelsContext} from './context';

export default function Novels () {
  const {novels} = useContext(NovelsContext);

  return (
    <div>
      <Helmet>
        <title>Novels</title>
      </Helmet>
      <section>
        <h1>Novels</h1>
        <ul dir="rtl">
          {novels.map(novel => (
            <li key={novel.id}><Link to={novel.id}>{novel.title}</Link></li>
          ))}
      </ul>
      </section>
    </div>
  );
}
