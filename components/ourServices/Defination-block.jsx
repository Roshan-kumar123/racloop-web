export default function Defination({ data }) {
  return (
    <>
      <div className="flex flex-col p-10 justify-center items-center text-center">
        <div className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl p-10 w-auto">
          {data.title}
        </div>
        {data.content && (
          <div className="mb-6 text-lg font-normal text-black lg:text-2xl sm:px-16 xl:px-48">
            {data.content}
          </div>
        )}
        {data.image}
      </div>
    </>
  );
}
