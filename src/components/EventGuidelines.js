import React, { useState } from "react";

const EventGuidelines = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-10 mt-12 py-8 lg:ml-28">
      <div className="flex justify-between items-center border-b border-black">
        <h2 className="text-black md:text-3xl">Event guidelines</h2>
        <button
          className={`transform transition-transform duration-300 ${
            isOpen ? "-rotate-90" : "rotate-90"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="/static/images/chevron-right.svg"
            alt="Toggle-arrow"
            className="w-6 h-6"
          />
        </button>
      </div>
      {isOpen && (
        <div className="border border-gray-300 rounded-lg p-4 mt-4">
          <div className="mb-4">
            <h3 className="font-bold">BOOKING REQUIREMENTS</h3>
            <p>
              A 50% deposit is required to confirm your event. Due to
              availability, reservations are only confirmed upon receipt of the
              signed contract and authorization form.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">FINAL PAYMENT DUE:</h3>
            <p>
              The client is responsible for paying the minimum number of guests
              guaranteed or the number of guests in attendance, whichever is
              higher. Any increases in the guest count will be accepted based on
              availability. Final payment is due the day of the event. Final
              event order & guest count must be finalized at least 72 hours
              before the event and may not be reduced afterward.
            </p>
          </div>
          <div>
            <h3 className="font-bold">ADDITIONAL POLICIES</h3>
            <p>
              • Any special meal orders (vegetarian, allergies, etc.) should be
              included with the final meal guarantee.
            </p>
            <p>
              • Any changes made within three (3) days before the event must be
              approved by the restaurant management and are subject to
              additional costs & labor fees
            </p>
            <p>
              • Late arrivals & Timing: For non-private or semi-private events,
              we will hold tables for up to 15 minutes, after which we cannot
              guarantee availability. Lunch/Brunch parties are allotted two and
              a half hours, and dinner parties are allotted three hours. If the
              time limit is exceeded, additional venue charges may be applied.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGuidelines;
