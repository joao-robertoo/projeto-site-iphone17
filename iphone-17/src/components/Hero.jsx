function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-90"
          src="/img/hero.jpg"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div>
      </div>

      {/* Arrow */}
      <div
        className="cursor-pointer absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ animation: "arrow-fade 2s ease-in-out infinite" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>

    </section>
  );
}

export default Hero;
