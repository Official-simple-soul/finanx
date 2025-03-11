import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children, width, showClose = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center px-5 z-50">
      <div
        className={`relative bg-white rounded-lg p-2 md:p-6 ${
          width ?? 'max-w-sm'
        } max-h-[80vh] w-full overflow-auto`}
      >
        {showClose && (
          <button onClick={onClose} className="absolute top-0 right-0 m-4">
            <FaTimes />
          </button>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
