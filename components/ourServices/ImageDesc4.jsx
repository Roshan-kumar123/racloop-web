export default function ImageDesc4({ data }) {
  return (
    <div className="flex-col p-2 md:p-5 flex-wrap items-center justify-center">
      <div className="text-black font-bold text-5xl text-center p-3">
        {data.title}
      </div>
      <div className="flex justify-around items-center flex-wrap">
        <div className="">
          <img
            src={data.image}
            className="h-auto w-auto md:h-[400px] md:w-[500px] p-5"
          ></img>
        </div>

        <div className="text-black text-2xl text-center p-3 w-[900px]">
          {data.content}
        </div>
      </div>
    </div>
  );
}
