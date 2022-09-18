import {Link} from 'react-router-dom';

export default function Topnav () {
  return (
    <nav className="mb-4">
      <h1 className="mb-0"><Link to="/">Hebrew Novels</Link></h1>
      <ul>
        <li><Link to="/novels">Novels</Link></li>
        <li><Link to="/readings">Readings</Link></li>
      </ul>
      <hr/>
    </nav>
  );
}
