import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

export default function Novels () {
  return (
    <div>
      <Helmet>
        <title>Novels</title>
      </Helmet>
      <section>
        <h1>Novels</h1>
        <ul>
          <li><Link to="foo">foo</Link></li>
          <li><Link to="bar">bar</Link></li>
      </ul>
      </section>
    </div>
  );
}
