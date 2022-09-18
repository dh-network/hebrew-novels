import {useContext} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {NovelsContext} from './context';

export default function Readings () {
  const {readings} = useContext(NovelsContext);

  return (
    <div>
      <Helmet>
        <title>Readings</title>
      </Helmet>
      <section>
        <h1>Readings</h1>
        <ol dir="rtl">
          {readings.map(reading => (
            <li key={reading.id}>
              <Link to={reading.id}>{reading.title}</Link>
              {reading.nliId && (
                <>
                  {' ('}
                  <Link to={`/novels/${reading.nliId}`}>{reading.nliId}</Link>)
                </>
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
