export default function ColumnInfo2({ data }) {
  return (
    <>
      <div className="flex-col justify-center p-10">
        <h1 className="text-5xl text-black font-bold text-center mb-5">
          {data.title}
        </h1>
        <div className="flex flex-wrap justify-center">
          {data.content.map((item, index) => {
            return (
              <div className="flex flex-col md:flex-row w-[700px] p-3 md:p-5">
                <div className="flex items-center justify-center mb-3 md:mb-0">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center max-w-3xl pl-5">
                  <span className="text-3xl text-black font-bold md:text-start text-center">
                    {item.title}
                  </span>
                  <span className="mt-4 text-xl">{item.content}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
