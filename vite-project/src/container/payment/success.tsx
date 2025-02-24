import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PaymentSucess() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-2xl">Yayy! Order Placed</div>
      <CheckCircle className="h-10 w-10 text-green-500" />
      <Button size={"lg"} variant={"link"} onClick={() => navigate("/")}>
        Continue Shopping
      </Button>
    </div>
  );
}
