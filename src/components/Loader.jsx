export default function Loader() {
  return (
    <div className="relative block w-[130px] h-[4px] rounded-full bg-black/20 overflow-hidden">
      <span className="absolute top-0 left-0 h-full w-0 rounded-full bg-[#0071e2] animate-loader"></span>
    </div>
  );
}
