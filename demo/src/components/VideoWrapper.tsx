import React, { ReactNode } from 'react';

const VideoWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        boxShadow: '#d0cdcd 0 0 10px 0 ',
      }}
    >
      {children}
    </div>
  );
};

export default VideoWrapper;
