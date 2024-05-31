function convertToHtml(code) {
  return { __html: code };
}

export default function CodeBlock({ data }) {
  return (
    <div className="flex flex-col p-3 md:p-10">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center p-10">
        {data.title}
      </h1>
      <div className="flex flex-row justify-center items-center flex-wrap">
        <code
          dangerouslySetInnerHTML={{ __html: data.content }}
          className="bg-black color-white p-3 md:p-10 h-auto md:w-[600px] border-2 border-black rounded-3xl lg:mt-5 lg:mr-5 text-sm w-[400px] overflow-auto"
        />
        <img
          src={data.output}
          alt="Output"
          className="h-[300px] md:h-[500px] w-[800px] mt-5 rounded-3xl"
        ></img>
      </div>
    </div>
  );
}
