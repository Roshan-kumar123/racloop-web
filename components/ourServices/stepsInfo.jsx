export default function StepsInfo({ data }) {
  return (
    <div
      className="flex flex-col justify-around items-center dark:bg-gray-100 p-20"
      style={{ backgroundColor: "rgb(255,244,236)" }}
    >
      <div className="text-4xl md:text-5xl text-black font-bold text-center">
        {data.title}
      </div>
      <div className="flex flex-row flex-wrap justify-around items-around">
        {data.content.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="w-[350px] md:w-[400px] h=[400px] flex flex-col justify-center items-center p-5 border-2 border-black rounded-3xl mt-5"
              >
                {item.icon && <div className="text-5xl mb-3">{item.icon}</div>}
                <div className="text-3xl text-black">{item.title}</div>
                <div className="text-xl mt-3">{item.content}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
