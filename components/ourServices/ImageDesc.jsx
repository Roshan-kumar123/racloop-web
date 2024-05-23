export default function ImageDesc({ data }) {
  return (
    <div className="flex flex-col justify-center items-center content-center p-3">
      <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center p-10">
        {data.title}
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="flex flex-col">
          {data.content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-10 md:w-[700px] w-[500px]"
            >
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-black">
                {item.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-auto h-[300px] md:h-[500px] w-[600px]"
        />
      </div>
    </div>
  );
}
