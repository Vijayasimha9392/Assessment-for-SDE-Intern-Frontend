import React, { useEffect } from 'react';

const ThankYouScreen = ({ onTimeout }) => {
  useEffect(() => {
    const timer = setTimeout(onTimeout, 5000);
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div className="thank-you-screen">
      <h2>Thank you for your time!</h2>
      <p>Redirecting back to the welcome screen...</p>
    </div>
  );
};
export default ThankYouScreen;
