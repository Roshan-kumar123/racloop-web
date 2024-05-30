import { FaDotCircle } from "react-icons/fa";

export default function ImageDesc2({ data, reverse = false }) {
  return (
    <div className="flex flex-col justify-center items-center content-center p-3">
      <h1 className="mb-4 font-bold leading-none tracking-tight text-gray-900 text-5xl lg:text-6xl dark:text-black text-center p-10">
        {data.title}
      </h1>
      <div
        className="flex flex-wrap justify-center items-center"
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <div className="flex flex-col">
          {data.content.map((item, index) => (
            <div className="flex items-center">
              <FaDotCircle style={{ color: "rgb(225,150,83)" }} />
              <h2
                key={index}
                className="text-xl font-bold text-gray-900 md:text-xl dark:text-black p-2"
              >
                {item}
              </h2>
            </div>
          ))}
        </div>
        <img
          src={data.image}
          alt={data.title}
          className="h-auto h-[300px] md:h-[500px] w-[600px] lg:p-10"
        />
      </div>
    </div>
  );
}
