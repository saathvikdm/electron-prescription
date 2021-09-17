import React from 'react';

export default function DynamicFormElement({ inputName, data }) {
  console.log('dfe', data);
  return (
    <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
      <h5
        style={{
          padding: '3px',
          margin: '3px',
          fontSize: '12pt',
          fontWeight: 700,
        }}
      >
        {inputName}:
      </h5>
      {/* {data && data[1].item !== '' */}
      <ol>
        {data && data[0].item !== ''
          ? data.map((treat, index) => {
              return (
                <li
                  style={{ fontSize: '0.9em', listStyle: 'disc' }}
                  key={index}
                >
                  {treat.type && treat.type !== '' && `${treat.type}.`}
                  {treat.item}{' '}
                  {treat.freq && treat.freq !== '' && `${treat.freq}`}{' '}
                  {treat.when && 'before food'}{' '}
                  {treat.interval &&
                    treat.interval !== '' &&
                    `for ${treat.interval} ${
                      treat.interval > 1 ? 'days' : 'day'
                    }`}
                </li>
              );
            })
          : ''}
      </ol>
    </div>
  );
}
