function ServiceTitle({ data }) {
  return (
    <>
      <div
        className="h-[700px] flex flex-col justify-center items-center text-black font-bold"
        style={{
          backgroundColor: "rgb(255,244,236)",
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-5xl md:text-7xl center text-center">
          {data.title}
        </div>
        <div className="text-2xl md:text-3xl mt-10 text-center">
          {data.content}
        </div>
      </div>
    </>
  );
}

export default ServiceTitle;
