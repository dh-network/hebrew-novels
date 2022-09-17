import {Helmet} from 'react-helmet';
import {useParams} from "react-router-dom";

export default function Novel () {
  const { id } = useParams<{id: string}>();
  return (
    <div>
      <Helmet>
        <title>Novel: {id}</title>
      </Helmet>
      <section>
        <h1>{id}</h1>
      </section>
    </div>
  );
}
