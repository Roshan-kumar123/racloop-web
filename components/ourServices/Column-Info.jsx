export default function ColumnInfo({ data }) {
  return (
    <section
      className="dark:text-gray-800"
      style={{ backgroundColor: "rgb(255,244,236)" }}
    >
      <div className="container mx-auto flex flex-col p-10">
        <div className="text-5xl text-black font-bold text-center mb-8">
          {data.title}
        </div>
        {data.subheading && (
          <div className="text-2xl text-black text-center mt-5 p-2 pt-5 pb-5 md:text-3xl">
            {data.subheading}
          </div>
        )}
        <div className="divide-y dark:divide-gray-300">
          {data.content.map((item, index) => {
            return (
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex md:mr-10 items-center justify-center lg:col-span-1 col-span-full">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-2xl font-bold md:text-3xl">
                    {item.title}
                  </span>
                  <span className="mt-4 dark:text-gray-700 text-xl">
                    {item.content}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
