const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url("/images/webp/hero-bg-image.webp")` }}
      className="w-full bg-cover bg-center bg-no-repeat p-6 sm:p-10 relative flex justify-center items-end min-h-[400px] sm:min-h-[500px] lg:min-h-auto"
    >
      <div className="flex flex-col gap-4 mb-10 sm:mb-20 lg:mb-37.5 mt-10 sm:mt-20 lg:mt-39.25 max-w-full sm:max-w-207 text-center w-full text-whitee px-2 sm:px-0">
        <h1 className="text-3xl sm:text-5xl lg:text-custom-6xl font-dm-serif-text leading-120">
          About Captiva Verde
        </h1>
        <p className="leading-160 font-poppins text-sm sm:text-base">
          Captiva Verde is a publicly traded company (Canadian Security Exchange
          - Symbol PWR, OTC: CPIVF) working hand-in-hand with Indigenous
          communities to lead sovereign, sustainable development across North
          America. Through our partnership with the Matnaggewinu Development
          Corporation (MDC), we're reshaping how housing, water, defense, and
          wellness solutions are created and delivered—by communities, for
          communities.
        </p>
      </div>
    </div>
  );
};

export default Hero;
