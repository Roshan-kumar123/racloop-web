export default function ImageDesc({ data }) {
  return (
    <div className="flex flex-col justify-center items-center content-center p-3">
      <h1 className="mb-4 font-bold leading-none tracking-tight text-gray-900 text-5xl lg:text-6xl dark:text-black text-center p-10">
        {data.title}
      </h1>
      <div className="flex flex-wrap justify-center items-center text-center">
        <div className="flex flex-col">
          {data.content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-3 md:w-[700px] w-[400px]"
            >
              <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-black">
                {item.title}
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        {data.image}
      </div>
    </div>
  );
}
