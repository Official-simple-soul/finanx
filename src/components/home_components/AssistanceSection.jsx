const AssistanceSection = () => (
  <section className="md:w-[82%] mx-auto py-10 px-6">
    <h1 className="text-3xl font-bold text-center text-dark-blue mb-8">
      How we assist traders
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        'Stocks',
        'Options',
        'Futures',
        'Futures options',
        'ETFs',
        'Mutual funds',
        'Advanced platforms',
        'APIs',
        'Individual & entity accounts',
        'Market insights',
        'Simulated trading',
        'Live events',
      ].map((item) => (
        <div
          key={item}
          className="flex justify-between items-center bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="text-dark-blue font-medium">{item}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-dark-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      ))}
    </div>
  </section>
);

export default AssistanceSection;
