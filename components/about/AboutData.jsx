export default function AboutData({ data }) {
  return (
    <>
      <div className="flex p-10 justify-center items-center flex-wrap">
        <div className="text-2xl flex-1">{data.content}</div>
        <div className="flex flex-wrap flex-1 justify-center items-center">
          {data.data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-col justify-center item-center text-center w-[230px] p-3"
              >
                <div
                  className="text-5xl mb-3"
                  style={{ color: "rgb(225,150,83)" }}
                >
                  {item.title}
                </div>
                <div className="text-black font-bold">{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
