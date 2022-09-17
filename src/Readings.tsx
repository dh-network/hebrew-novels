import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

export default function Readings () {
  return (
    <div>
      <Helmet>
        <title>Readings</title>
      </Helmet>
      <section>
        <h1>Readings</h1>
        <ul>
          <li><Link to="foo">foo</Link></li>
          <li><Link to="bar">bar</Link></li>
      </ul>
      </section>
    </div>
  );
}
