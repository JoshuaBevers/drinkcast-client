/* eslint-disable react/prop-types */
import React from 'react';

const ConnectionStatus = ({ connected }) => {
  const status = connected ? 'Connected' : 'Disconnected';

  return (
    <div className="connectionStatus">
      <strong>Status: </strong>
      {status}
    </div>
  );
};

export default ConnectionStatus;
