import { NavLink } from 'react-router';
import AssistanceSection from '../components/home_components/AssistanceSection';
import LatestNewsSection from '../components/home_components/LatestNews';
import PlansSection from '../components/home_components/PlansSection';
import ScrollingTextAnimation from '../components/home_components/ScrollingText';
import Testimonial from '../components/home_components/Testimonial';

function Home() {
  return (
    <div>
      <ScrollingTextAnimation />
      <section
        id="account"
        className="flex flex-col-reverse md:flex-row md:h-[60vh] bg-primary"
      >
        <div className="md:w-1/2 h-full space-y-6 flex flex-col justify-center px-6 md:px-32 py-12">
          <h1 className="text-[30px] md:text-[40px] leading-[50px] font-bold text-dark_blue">
            <span className="text-white">Destiny brought you here.</span>
            Your skill will keep you here.
          </h1>
          <p className="text-2xl text-white font-light">
            Just like you, trading is in our DNA.
          </p>
          <NavLink to={'/signup'} className="flex">
            <button className="bg-white text-primary-blue px-8 py-3 rounded-lg text-primary font-semibold">
              Open Account
            </button>
          </NavLink>
        </div>
        <div className="md:w-1/2 h-full">
          <img
            src="/hero.jpg"
            alt="Trading setup"
            className="w-full h-full md:rounded-tl-full shadow-lg"
          />
        </div>
      </section>
      <section className="flex justify-center items-center w-[96%] md:w-[82%] mx-auto py-10">
        <img src="/options.png" alt="" className="w-full" />
      </section>
      <section
        id="support"
        className="py-8 w-[88%] md:w-[82%] mx-auto flex flex-col items-center space-y-10"
      >
        <h1 className="text-3xl text-center md:text-5xl font-bold">
          Who we can support
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col md:flex-row gap-14">
            <div className="flex flex-col space-y-5">
              <img
                src="/trader.jpg"
                alt="Individual"
                className="rounded-lg md:h-80"
              />
              <h1 className="text-2xl font-bold">Sophisticated traders</h1>
              <p>
                Craft, test, and execute your trading strategies with our
                award-winning¹ trading software, featuring modern analysis
                tools, deep charting capabilities, extensive customization, and
                much more.
              </p>
              {/* Add learn more button */}
              <div className="flex">
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <img
                src="/institution.jpg"
                alt="Institutional"
                className="rounded-lg md:h-80"
              />
              <h1 className="text-2xl font-bold">Institutions</h1>
              <p>
                As a global, self-clearing, direct-market-access firm, we
                provide trading and brokerage solutions to multiple types of
                clients. Plus, our technology is available via our APIs.
              </p>
              <div className="flex">
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4"></div>
        </div>
      </section>
      <section
        id="tools"
        className="md:w-[82%] mx-auto md:rounded-2xl overflow-hidden flex relative my-20"
      >
        <div className="left md:w-1/2 h-full space-y-10 p-6 md:p-12 z-40">
          <h1 className="text-3xl font-bold text-white">
            Private Brokerage – service without compromise
          </h1>
          <p className="text-white font-thin">
            Spend more time focusing on refining your strategy with Private
            Brokerage, an elevated trading experience for the most-active market
            tacticians. Top-tier service, personalized experiences, exclusive
            access, and more await.
          </p>
          <button className="rounded-xl bg-white text-primary px-7 py-3 font-semibold">
            Take a peek
          </button>
        </div>
        <div className="absolute right-0 left-0 top-0 bottom-0">
          <img
            src="https://www.tradestation.com/wp-content/uploads/pb-high-touch-service-256.gif"
            alt=""
            className="w-full h-full object-center"
          />
        </div>
      </section>
      <PlansSection id={'pricing'} />
      <AssistanceSection />
      <Testimonial />
      <LatestNewsSection />
      <section id="trading" className="py-6">
        <NavLink to="/signup">
          <img src="/trade_banner.png" alt="" />
        </NavLink>
        <div className="px-6 md:w-[82%] mx-auto py-10 space-y-5">
          <p>
            *Statistics provided by S3 Matching Technologies LP, an independent
            company that is not affiliated with FinanX Securities Inc. Data
            shown for 2023 calendar year.
          </p>
          <p>
            **As of March 31, 2023 based on an annual calculation using internal
            FinanX customer service data. Statistical outliers (including
            erroneous calls and disconnected lines) have been removed to provide
            a better representation of a typical customer experience.
          </p>
          <p>ID3095042 D0324 P4023843481</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
