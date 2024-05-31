import LinkCard from "./LinkCard";

export default function LinkBlock({ data }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5">
        <h2 className="text-4xl font-bold text-black p-3">{data.title}</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.content.map((item, index) => (
            <LinkCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
