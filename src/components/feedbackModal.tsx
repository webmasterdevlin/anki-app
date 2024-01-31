import Modal from 'react-modal';

Modal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  message: string;
};

const FeedbackModal = ({ isOpen, onRequestClose, contentLabel, message }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="absolute left-1/2 top-1/2 max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 shadow-xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-30"
    >
      <div className="text-center">
        <p className="mb-4 text-lg text-gray-800">{message}</p>
        <button
          onClick={onRequestClose}
          className="inline-block rounded-lg bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
