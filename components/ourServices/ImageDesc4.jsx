export default function ImageDesc4({ data, reverse = false }) {
  return (
    <div className="flex-col p-2 md:p-5 flex-wrap items-center justify-center">
      <div className="text-black font-bold text-5xl text-center p-3">
        {data.title}
      </div>
      <div
        className="flex justify-around items-center flex-wrap"
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <div className="">{data.image}</div>

        <div className="text-black text-2xl text-center p-3 w-[900px]">
          {data.content}
        </div>
      </div>
    </div>
  );
}
