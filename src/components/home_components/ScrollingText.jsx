import Marquee from 'react-fast-marquee';
import { useFetchMarketData } from '../../services/crypto.service';

const ScrollingTextAnimation = () => {
  const { data: cryptoElement, isLoading } = useFetchMarketData();

  return (
    <div className="scrolling-text-container space-x-3 bg-slate-800 py-1.5">
      {isLoading ? (
        <div className="text-xs text-black text-center">...</div>
      ) : (
        <Marquee>
          {cryptoElement?.map((data, index) => (
            <div className="text-[10px] mx-3 flex items-center" key={index}>
              <h1 className="mx-1 text-blue-800">{data?.symbol}</h1>
              <h1 className="mx-1">${data?.price}</h1>
              <h1 style={{ color: data?.change < 0 ? 'red' : 'green' }}>
                {data?.change}
              </h1>
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default ScrollingTextAnimation;
