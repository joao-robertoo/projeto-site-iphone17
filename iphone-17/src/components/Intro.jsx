function Intro() {
  const specs = [
    { value: "6.3”", label: "Display Super Retina XDR", color: "text-blue-500" },
    { value: "A18 Pro", label: "Chip mais rápido", color: "text-orange-500" },
    { value: "48MP", label: "Sistema de câmera Pro", color: "text-blue-500" },
    { value: "29h", label: "Bateria", color: "text-orange-500" },
  ];

  return (
    <section className="bg-black px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          iPhone 17 Pro
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gradient mb-4">
          Titânio. Tão forte. Tão leve. Tão Pro.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          O design mais refinado que já criamos. Titânio de grau aeroespacial,
          chip A18 Pro e um sistema de câmera profissional revolucionário.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/40">
            Compre agora
          </button>

          <button className="border border-white/70 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:scale-105">
            Saiba mais
          </button>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl p-5 md:p-6 text-center transition-all duration-300 hover:bg-neutral-800 hover:scale-105"
            >
              <p className={`text-2xl md:text-3xl font-semibold mb-1 ${spec.color}`}>
                {spec.value}
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                {spec.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Intro;
