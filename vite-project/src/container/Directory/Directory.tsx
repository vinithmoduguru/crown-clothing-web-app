import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../Home/shop/shop-services";
import { Loader2 } from "lucide-react";
import DirectoryItem from "./DirectoryItem";

export default function Directory() {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return isPending ? (
    <Loader2 className="animate-spin" />
  ) : (
    <div className="flex justify-between flex-wrap w-full">
      {data?.map((category) => (
        <DirectoryItem key={category._id} {...category} />
      ))}
    </div>
  );
}
