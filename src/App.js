import React from "react";

function App() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Item 1 */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Item 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Item 2</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Item 3</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Item 4 (This will appear only on larger screens) */}
          <div className="hidden lg:block bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Item 4</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Item 5 (This will appear only on medium and larger screens) */}
          <div className="hidden md:block lg:block bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Item 5</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
