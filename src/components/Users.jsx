import { Outlet, useSearchParams } from "react-router-dom";

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';

  return (
    <>
      <h1>Users</h1>
      <div>
        <h2>User1</h2>
        <h2>User2</h2>
        <h2>User3</h2>
      </div>
      <Outlet />
      <br />
      <br />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
        <button onClick={() => setSearchParams()}>Reset Filter</button>
      </div>
      {showActiveUsers ? <h3>Active Users</h3> : <h3>All Users</h3>}
    </>
  );
}
