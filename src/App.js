import React from 'react';

function CommunityPage() {
  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/street-care-logo.png" alt="Street Care Logo" className="h-8 mr-2" />
            <span className="font-bold text-xl">Street Care</span>
          </div>
          {/* Navigation Tabs */}
          <div className="flex items-center">
            <a href="#" className="px-4">About</a>
            <a href="#" className="px-4">How to Help</a>
            <a href="#" className="px-4">Community</a>
            <a href="#" className="px-4">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Community Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200 py-8">
        <div className="bg-gray-200 rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 gap-6">
            {/* Community Hero Card */}
            <div className="bg-white rounded-lg shadow-md p-4 w-1120 h-666 mb-6">
              <h2 className="text-lg font-semibold mb-2">Community</h2>
              <p>Learn more about our Community Hero program.</p>
            </div>
            {/* Help Request Card */}
            <div className="bg-gradient-to-br from-yellow-200 to-gray-300 rounded-lg shadow-md p-4 w-1120 h-1204 mb-6">
              <h2 className="text-lg font-semibold mb-2">Help Request</h2>
              <p>Submit a help request or view existing requests.</p>
            </div>
            {/* Outreaches Card */}
            <div className="bg-white rounded-lg shadow-md p-4 w-1120 h-666 mb-6">
              <h2 className="text-lg font-semibold mb-2">Outreaches</h2>
              <p>See our latest outreach events and initiatives.</p>
            </div>
            {/* Visit Log Card */}
            <div className="bg-white rounded-lg shadow-md p-4 w-1120 h-666">
              <h2 className="text-lg font-semibold mb-2">Visit Log</h2>
              <p>Track visits and interactions with the community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
