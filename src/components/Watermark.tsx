import React, { useState, useEffect } from 'react';

export default function Watermark() {
  const [opts, setOpts] = useState({
    text: 'VLCDCC',
    fontWeight: 500,
    fontSize: '5',
    opacity: '0.05',
    top: '15',
    marginLeft: '10',
  });

  useEffect(() => {
    const watermark = localStorage.getItem('text');
    const size = localStorage.getItem('fontSize');
    const weight = localStorage.getItem('fontWeight');
    const op = localStorage.getItem('opacity');
    const tp = localStorage.getItem('top');
    const ml = localStorage.getItem('marginLeft');

    const userOpts = {
      text: watermark,
      fontWeight: weight,
      fontSize: size,
      opacity: op,
      top: tp,
      marginLeft: ml,
    };

    setOpts(userOpts);
  }, []);

  return (
    <div
      id="watermark"
      style={{
        fontSize: `${opts && opts.fontSize}em`,
        fontWeight: `${opts && opts.fontWeight}`,
        opacity: `${opts && opts.opacity}`,
        top: `${opts && opts.top}cm`,
        marginLeft: `${opts && opts.marginLeft}px`,
      }}
    >
      {opts && opts.text}
    </div>
  );
}
