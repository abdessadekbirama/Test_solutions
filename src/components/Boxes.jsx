function Boxes() {
  const boxes = [
    {},
    {
      title: "Logo is an Important Element of Your Identification",
      text: "It is assumed that a well-prepared creation, which will be identified with our business for years, should meet a number of features. An interesting logo should be at the same time.",
      more: "Read More",
      bg: "#212121",
    },
    {},
    {
      title: "Website Design is a Complex and Advanced Process",
      text: "In the design process, you can effectively insure your project against unforeseen events. Proven design practices are the only way to improve the performance of a project team.",
      more: "Read More",
      bg: "#3D5AFE",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`${box.bg ? "flex" : "hidden"} md:flex flex-col gap-3 p-6 md:p-8 min-h-32 lg:min-h-0`}
          style={{ backgroundColor: box.bg || "#D9D9D9" }}
        >
          {box.title && (
            <h2 className="text-white hero-title font-semibold text-lg md:text-xl">
              {box.title}
            </h2>
          )}
          {box.text && (
            <p className="text-sm text-[#F5F5F5] links">{box.text}</p>
          )}
          {box.more && (
            <a
              href="#"
              className="btn mt-auto font-semibold text-white links text-sm md:text-base"
            >
              {box.more}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Boxes;
