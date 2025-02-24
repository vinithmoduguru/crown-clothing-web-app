import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";

export default function PaymentCancel() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-2xl">Payment Cancelled</div>
      <Button size={"lg"} variant={"link"} onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
}
