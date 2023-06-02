import React, { useState } from 'react';

function Popup({ isOpen, onClose, children }) {
  const [isRendered, setIsRendered] = useState(isOpen);

  const handleClose = () => {
    setIsRendered(false);
    onClose();
  };

  return (
    <>
      {isRendered && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            {children}
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}