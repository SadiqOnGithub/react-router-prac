import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userId } = useParams();
  return (
    <>
      Details about the user { userId }
    </>
  );
}
