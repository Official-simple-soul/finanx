import { TfiAngleLeft } from 'react-icons/tfi';
import { useGlobalStore } from '../../../store/Context';

function Header({ type, children }) {
  const { setPage, switchKey, setSwitchKey } = useGlobalStore();

  type = type
    .split('')
    .map((n, i) => (i == 0 ? n.toUpperCase() : n))
    .join('');

  return (
    <header className="fixed top-0 right-0 left-0 z-10 bg-white border-b">
      <div
        className={`justify-between px-4 text-[17px] mx-auto ${type === 'Transfer' ? 'pt-4' : 'py-4'
          }`}
      >
        <div className="flex justify-between w-full">
          <div className="text-2xl md:flex-1">
            <TfiAngleLeft
              onClick={() => setPage('home')}
              className="text-pri cursor-pointer"
            />
          </div>
          <div className="flex-1">{type}</div>
        </div>
        {type === 'Transfer' ? (
          <div className="grid grid-cols-2 justify-center items-center w-full mt-1">
            <p
              className={`${switchKey === 1 ? 'border-b-2 border-pri' : ''
                }  pb-3 text-center transition-all ease-in-out duration-300 cursor-pointer text-xs text-neutral`}
              onClick={() => setSwitchKey(1)}
            >
              External Transfer
            </p>
            <p
              className={`${switchKey === 2 ? 'border-b-2 border-pri' : ''
                }  pb-3 text-center transition-all ease-in-out duration-300 cursor-pointer text-xs text-neutral`}
              onClick={() => setSwitchKey(2)}
            >
              Crypto Transfer
            </p>
          </div>
        ) : null}
        {children}
      </div>
    </header>
  );
}

export default Header;
