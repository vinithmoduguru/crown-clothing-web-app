import { useNavigate } from "react-router";
import { Category } from "../Home/shop/shop-services";

export default function DirectoryItem({ _id, title, imageUrl }: Category) {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${_id}`);

  return (
    <div
      onClick={onNavigateHandler}
      className="relative flex items-center justify-center flex-1 min-w-[30%] h-[240px] border border-black mx-[7.5px] mb-[15px] overflow-hidden group cursor-pointer"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Body */}
      <div className="absolute flex flex-col items-center justify-center h-[90px] px-[25px] border border-black bg-white opacity-70 transition-opacity group-hover:opacity-90">
        <h2 className="text-[22px] font-bold uppercase text-gray-700 m-[6px]">
          {title}
        </h2>
        <p className="text-[16px] font-light">Shop now</p>
      </div>
    </div>
  );
}
