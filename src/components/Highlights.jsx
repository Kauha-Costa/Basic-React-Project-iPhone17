function Highlights() {
  const specs = [
    {
      value: "48MP",
      title: "Principal",
      label: "Sensor quad-pixel com foco automático",
      color: "text-blue-600",
    },
    {
      value: "12MP",
      title: "Ultra Wide",
      label: "Campo de visão de 120° com modo noturno",
      color: "text-orange-500",
    },
    {
      value: "12MP",
      title: "Telefoto 5x",
      label: "Zoom óptico de 5x com estabilização",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-bold mb-4">Design revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/3-iphones-tita.png"
              alt="Iphone Titanium"
            />
            <h3 className="font-bold  mb-2 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/ios-features.jpg"
              alt="ios 2026"
            />
            <h3 className="font-bold  mb-2 text-3xl">iOS 26</h3>
            <p className="text-gray-300">
              O sistema operacional mais avançado do mundo com IA integrada.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 mb-16 py-20 px-10" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
          <p className="text-gray-200 mb-6">
            O chip mais poderoso em um smartphone
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="../../public/img/chip-a18-pro.jpg"
            alt="chip-a18"
          />

          <ul className="space-y-3 text-gray-300 list-disc">
            <li>CPU 20% mais rápida</li>
            <li>GPU 25% mais eficiente</li>
            <li>Neural Engine com 16 núcleos</li>
            <li>Ray tracing acelerado por hardware</li>
          </ul>
        </div>
       </div>


        <div>
          <h1 className="text-3xl font-bold text-center py-20 px-6" id="camera">
            Sistema de câmera Pro avançado
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-6xl mt-7">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 py-7 px-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer text-center"
              >
                <p className={`text-4xl font-bold mb-2 ${spec.color}`}>
                  {spec.value}
                </p>
                <p className="text-2xl font-bold mb-1">{spec.title}</p>
                <p>{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
    
    </section>
  );
}

export default Highlights;
