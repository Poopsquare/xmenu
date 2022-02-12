import {Link} from "remix";

export default function Index() {
  return (
      <article>
        <h1>Menu Editor</h1>
        <Link to={'bandeco'}>Click here to open Menu</Link>
      </article>
  );
}
