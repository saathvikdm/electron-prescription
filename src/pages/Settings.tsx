import React, { useState, useEffect } from 'react';

import Header from '../components/Header';

export default function Settings() {
  const [opts, setOpts] = useState();
  const [saved, setSaved] = useState(false);

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

    console.log(opts);
  }, []);

  function handleSaveSettings() {
    localStorage.setItem('text', opts.text);
    localStorage.setItem('fontSize', opts.fontSize);
    localStorage.setItem('fontWeight', opts.fontWeight);
    localStorage.setItem('opacity', opts.opacity);
    localStorage.setItem('top', opts.top);
    localStorage.setItem('marginLeft', opts.marginLeft);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1000);
  }

  return (
    <div
      className="container justify-content-center flex-column"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="my-5">
        <div className="col-md-12">
          <label
            htmlFor="settings"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            Watermark Text
            <input
              type="text"
              className="form-control"
              value={opts && opts.text}
              onChange={(e) => setOpts({ ...opts, text: e.target.value })}
            />
          </label>
        </div>

        <div className="col-md-12">
          <label
            className="form-label mx-1"
            htmlFor="customRange3"
            style={{ width: '100%' }}
          >
            Font Size ({opts && opts.fontSize}em)
            <input
              type="range"
              className="form-range"
              min="1"
              max="10"
              step="1"
              id="customRange3"
              value={opts && opts.fontSize}
              onChange={(e) => setOpts({ ...opts, fontSize: e.target.value })}
            />
          </label>
        </div>

        <div className="col-md-12">
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

        <div className="col-md-12">
          <label
            className="form-label mx-1"
            htmlFor="customRange3"
            style={{ width: '100%' }}
          >
            Opacity ({opts && opts.opacity})
            <input
              type="range"
              className="form-range"
              min="0.01"
              max="0.1"
              step="0.01"
              id="customRange3"
              value={opts && opts.opacity}
              onChange={(e) => setOpts({ ...opts, opacity: e.target.value })}
            />
          </label>
        </div>

        <div className="col-md-12">
          <label
            className="form-label mx-1"
            htmlFor="customRange3"
            style={{ width: '100%' }}
          >
            Position Top ({opts && opts.top}cm)
            <input
              type="range"
              className="form-range"
              min="0"
              max="30"
              step="1"
              id="customRange3"
              value={opts && opts.top}
              onChange={(e) => setOpts({ ...opts, top: e.target.value })}
            />
          </label>
        </div>

        <div className="col-md-12">
          <label
            className="form-label mx-1"
            htmlFor="customRange3"
            style={{ width: '100%' }}
          >
            Margin Left ({opts && opts.marginLeft}px)
            <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              step="1"
              id="customRange3"
              value={opts && opts.marginLeft}
              onChange={(e) => setOpts({ ...opts, marginLeft: e.target.value })}
            />
          </label>
        </div>
        {saved ? <p className="text-center">Saved!</p> : ''}
        <div className="col-md-12 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleSaveSettings}
          >
            Save Settings
          </button>
        </div>

        <h4 className="text-center mt-3">Contact Developer For Help</h4>
        <p className="text-center">
          EMAIL:{' '}
          <a href="mailto:saathvikdm@outlook.com">saathvikdm@outlook.com</a>
        </p>
      </div>
    </div>
  );
}
