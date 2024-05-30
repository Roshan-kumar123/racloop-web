export default function Defination({ data }) {
  return (
    <>
      <div className="p-10">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center p-10">
          {data.title}
        </h1>
        {data.content && (
          <p className="mb-6 text-lg font-normal text-black lg:text-2xl sm:px-16 xl:px-48 text-center">
            {data.content}
          </p>
        )}
      </div>
    </>
  );
}
