const ThankYouModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">🎉 You're on the list!</h3>
          <p className="text-gray-600 mb-4">
            Thanks for signing up. Want to meet fellow learners?
            Join our Discord community!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://discord.gg/your-invite-code" // 🔁 Replace with real link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
            >
              Join Discord
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ThankYouModal;
  