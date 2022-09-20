import {Helmet} from 'react-helmet-async';

export default function Home () {
  return (
    <div>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <section>
        <h1>Welcome</h1>
        <p>
          Brief project description to be added here.
        </p>
      </section>
    </div>
  );
}
