import React from 'react';

export default function DynamicFormInput({ inputName, data }) {
  return (
    <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
      <h5
        style={{
          padding: '3px',
          margin: '3px',
          fontSize: '12pt',
          textDecoration: 'underline',
        }}
      >
        {inputName}:
      </h5>

      <ol>
        {data ? (
          data.map((treat, index) => {
            return (
              <li style={{ fontSize: '0.9em' }} key={index}>
                {treat.treatmentGiven}
              </li>
            );
          })
        ) : (
          <p>N/A</p>
        )}
      </ol>
    </div>
  );
}
