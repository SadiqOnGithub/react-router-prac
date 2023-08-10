import { Outlet } from "react-router-dom";

export default function Users() {
  return (
    <>
      <h1>Users</h1>
      <div>
        <h2>User1</h2>
        <h2>User2</h2>
        <h2>User3</h2>
      </div>
      <Outlet />
    </>
  );
}
