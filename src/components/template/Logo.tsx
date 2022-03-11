export default function Logo() {
  return (
    <div
      className={`flex flex-col h-12 w-12 rounded-full bg-white items-center`}
    >
      <div className={`h-3 w-3 rounded-full bg-red-600 mb-0.5 mt-2`} />
      <div className="flex mt-0.5">
        <div className={`h-3 w-3 rounded-full bg-yellow-500 mr-0.5`} />
        <div className={`h-3 w-3 rounded-full bg-green-600 ml-0.5`} />
      </div>
    </div>
  );
}