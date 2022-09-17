import {Helmet} from 'react-helmet';
import {useParams} from "react-router-dom";

export default function Reading () {
  const { id } = useParams<{id: string}>();
  return (
    <div>
      <Helmet>
        <title>Reading: {id}</title>
      </Helmet>
      <section>
        <h1>{id}</h1>
      </section>
    </div>
  );
}
