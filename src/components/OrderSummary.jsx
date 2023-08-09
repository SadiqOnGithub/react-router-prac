import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();

  return (
    <>
      <div>Order Confirmed!!!</div>
      <br />
      <button onClick={() => navigate(-1)}>Go Back!</button>
    </>
  );
}
