const LatestNewsSection = () => (
  <section id="news" className="md:w-[82%] mx-auto px-6 py-12">
    <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">
      The latest news at your fingertips
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="https://www.tradestation.com/wp-content/uploads/pb-high-touch-service-256.gif"
          alt="News Chart"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-blue mb-4">
            Check out These Big Stories in 2024
          </h3>
          <p className="text-dark-blue">
            The S&P 500 is headed for another strong return as 2024 winds down.
            Here were some of the big stories...
          </p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="/trend1.png"
          alt="News Chart"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-blue mb-4">
            Rollercoaster Week Draws Money from the Sidelines
          </h3>
          <p className="text-dark-blue">
            The stock market had a rollercoaster week but could be riding
            bullish momentum into...
          </p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="/trend2.png"
          alt="News Chart"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-blue mb-4">
            All Eyes on the 10-Year Treasury Yield
          </h3>
          <p className="text-dark-blue">
            Downloads are available here. FinanX’s ideas on TradingView are
            available here...
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LatestNewsSection;
