const steps = [
  {
    id: 1,
    title: 'You Order',
    desc: 'Design and order boxes in a few clicks.',
    img: 'https://img.freepik.com/free-vector/order-now-banner_52683-48697.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 2,
    title: 'We Proof',
    desc: 'Approve your designs before production.',
    img: 'https://img.freepik.com/free-vector/order-now-banner_52683-48697.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 3,
    title: 'We Print & Ship',
    desc: 'Your order gets printed and shipped with tracking.',
    img: 'https://img.freepik.com/free-vector/order-now-banner_52683-48697.jpg?semt=ais_hybrid&w=740&q=80',
  },
];

const Process = () => {
  return (
    <section className="bg-emerald-400 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-14">
          Fast and easy custom boxes your customers will love
        </h2>

        {/* steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <img src={step.img} alt={step.title} className="w-24 h-24 mb-6" />
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm opacity-90 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        <button className="px-8 py-3 bg-blue-900 rounded-full font-medium">
          START YOUR DESIGN
        </button>
      </div>
    </section>
  );
};

export default Process;
