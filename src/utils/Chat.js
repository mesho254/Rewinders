import React, { useEffect } from 'react';

const ChatComponent = () => {
  useEffect(() => {
    try {
      // Initialize Kommunicate directly
      var kommunicateSettings = {
        appId: '2a5467be64132aa5fcd1786cdaa4dc0f', // Replace with your Kommunicate Application ID
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };

      // Initialize Kommunicate
      window.kommunicate = window.kommunicate || {};
      window.kommunicate._globals = kommunicateSettings;

      // Load Kommunicate chat widget
      (function (d, m) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
        var h = document.getElementsByTagName('head')[0];
        h.appendChild(s);
        s.onload = function () {
          // Kommunicate initialization is handled automatically by the script
        };
      })(document, window);
    } catch (error) {
      console.error("Script error:", error);
    }
  }, []);

  return (
    <div>
    </div>
  );
};

export default ChatComponent;
