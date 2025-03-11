import { mailTo } from '../../../../utils/mailTo';
import { useGlobalStore } from '../../../store/Context';

function AsideRight() {
  const { page, setPage, setLoader } = useGlobalStore();
  const secondaryNavContent = [
    { textContent: 'Account Home', icon: '', route: 'home' },
    { textContent: 'Account Transactions', icon: '', route: 'transactions' },
    { textContent: 'Transfer money', icon: '', route: 'transfer' },
  ];

  const handlePageChange = ({ route }) => {
    if (page === route) {
      return;
    }
    setLoader(true);
    setPage(route.toLowerCase());
  };

  const handleContact = () => {
    mailTo();
  };

  return (
    <div className="sticky top-0 pt-10 bg-white h-screen hidden lg:block">
      <div className="nav_secondary px-8 flex flex-col gap-2">
        <ul>
          {secondaryNavContent.map((n, i) => (
            <li className="text-pri border-b cursor-pointer" key={i}>
              <div
                className="py-3 inline-block"
                onClick={() =>
                  n.textContent === 'rounded-xl Us'
                    ? handleContact()
                    : handlePageChange(n)
                }
              >
                <span className="mr-4">-</span>
                {n.textContent}
              </div>
            </li>
          ))}
        </ul>
        <div className="security_tips flex flex-col gap-3">
          <h2>Security Tips</h2>
          <p className="text-gray-500 text-sm">
            Do not perform financial transactions on public Wifi as they may be
            unsecure.
            <br /> <br />
            Always make sure no one is watching when inserting your account
            sensitive details
          </p>
        </div>
      </div>
    </div>
  );
}

export default AsideRight;
