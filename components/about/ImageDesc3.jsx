export default function ImageDesc3({ data, reverse = false }) {
  return (
    <div
      className="flex p-2 md:p-5 flex-wrap items-center justify-around"
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <img
        src={data.image}
        className="h-auto h-[300px] md:h-[500px] w-[700px] p-3 rounded border"
      ></img>

      <div
        className="flex-col justify-center items-center p-10 rounded-xl border w-[700px] h-auto"
        style={{
          backgroundColor: "rgb(225,150,83)",
        }}
      >
        <div className="font-bold text-black text-5xl mb-5">{data.title}</div>
        <div className="font-medium text-white text-2xl">{data.content}</div>
      </div>
    </div>
  );
}
