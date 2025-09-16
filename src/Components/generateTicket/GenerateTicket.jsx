import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Ticket = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const ticketRef = useRef();

  if (!state) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">No ticket details found!</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleDownload = () => {
    const printContent = ticketRef.current.innerHTML;
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write(
      "<html><head><title>Ticket</title></head><body>"
    );
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4 py-8">
      <div className="w-1/2 flex flex-col items-center space-y-6">
        {/* Ticket */}
        <div
          ref={ticketRef}
          className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-5 border border-gray-300"
        >
          <h1 className="text-2xl font-bold text-center text-green-600">
            🎟 Your Ticket
          </h1>

          <div className="flex flex-col items-center space-y-3">
            <img
              src={state.posterUrl}
              alt="poster"
              className="w-40 h-56 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {state.theater}
            </h2>
            <p className="text-gray-600">Slot: {state.slot}</p>
            <p className="text-gray-600">
              Seats:{" "}
              <span className="font-semibold">
                {Array.isArray(state.seats) ? state.seats.join(", ") : "N/A"}
              </span>
            </p>
            <p className="text-gray-600">
              Total Seats:{" "}
              <span className="font-semibold">{state.totalNoOfSeat}</span>
            </p>
          </div>

          <div className="border-t border-dashed border-gray-400 my-4"></div>

          <div className="text-sm text-gray-500 space-y-1 text-center">
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>ID: #{Math.floor(Math.random() * 100000)}</p>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
        >
          Download PDF ⬇️
        </button>
      </div>
    </div>
  );
};

export default Ticket;
