import React from 'react';

const TripAdvisorEmbed = () => {
  const tripAdvisorUrl = 'https://www.tripadvisor.com/Attractions-g187374-Activities-Duisburg_North_Rhine_Westphalia.html';

  return (
    <div>
      {/* <h1>Check out the TripAdvisor page:</h1> */}
      <iframe
        title="TripAdvisor"
        src={tripAdvisorUrl}
        width="100%"
        height="1000"
        frameBorder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
};

export default TripAdvisorEmbed;