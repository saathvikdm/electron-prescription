import React from 'react';

export default function RangeSlider({ opts }) {
  return (
    <div className="col-md-8">
      <label
        className="form-label mx-1"
        htmlFor="customRange3"
        style={{ width: '100%' }}
      >
        Font Weight ({opts && opts.fontWeight})
        <input
          type="range"
          className="form-range"
          min="100"
          max="800"
          step="100"
          id="customRange3"
          value={opts && opts.fontWeight}
          onChange={(e) => setOpts({ ...opts, fontWeight: e.target.value })}
        />
      </label>
    </div>
  );
}
