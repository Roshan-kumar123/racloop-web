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
              <div className="flex w-[700px] md:p-5">
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center max-w-3xl pl-5">
                  <span className="text-3xl text-black font-bold">
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
