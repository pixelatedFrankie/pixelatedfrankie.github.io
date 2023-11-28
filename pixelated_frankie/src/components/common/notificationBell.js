const NotificationBell = ({ count }) => (
  <div className="relative inline-block text-left">
    <div className="flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full text-xs">{count}</div>
    <button className="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
      <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M15 17h5l-1.5 1.5M9 17H4l1.5-1.5M12 3v12m0 4v.01"></path>
      </svg>
    </button>
  </div>
);