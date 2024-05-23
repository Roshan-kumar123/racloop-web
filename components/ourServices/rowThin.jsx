export default function RowThin({ data }) {
  return (
    <div className="flex flex-col justify-around items-center dark:bg-gray-100 p-10 ">
      <div className="text-5xl text-black font-bold text-center">
        {data.title}
      </div>
      {data.subheading && (
        <div className="text-2xl text-black text-center mt-5">
          {data.subheading}
        </div>
      )}
      <div className="flex flex-row flex-wrap">
        {data.content.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center flex-1 p-5"
            >
              {item.icon}
              <div className="text-3xl text-black mt-3 text-center">
                {item.title}
              </div>
              <div className="text-xl mt-3 text-center">{item.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
