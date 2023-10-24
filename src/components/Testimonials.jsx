const Testimonials = () => {
  const testimonialData = [
    { testimony: "random text", name: "Dulce", relation: "X project" },
    { testimony: "random text2", name: "Paco", relation: "Y project" },
  ];

  return (
    <section className="container mx-auto px-12 py-28">
      <h1 className="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 md:mx-auto md:mb-24 md:w-4/5">
        Our
        <span className="text-violet-500">Recommendations</span>
      </h1>
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
        {testimonialData.map((item) => {
          return (
            <div
              key={item?.name}
              className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800"
            >
              {/* z-10 */}
              <div className="w-full text-center text-sm">
                <img
                  alt="Hanging out with friends"
                  className="mx-auto mb-8 h-20 w-20"
                  src="/images/avatar-1.png"
                />
                <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.testimony}
                </p>
                <div className="font-semibold text-slate-600">John Doe</div>
                <div className="text-xs text-slate-400">{item.relation}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
