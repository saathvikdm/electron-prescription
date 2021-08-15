import React from 'react';
import { Link } from 'react-router-dom';
import getPath from '../utils/GetPath';

export default function TableRow({ item, index }) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.data.inputData.paitentName}</td>
      <td>{item.date}</td>
      <td>
        <span className={`badge bg-${item.type}`}>{item.type}</span>
      </td>
      <td>
        <Link
          to={{
            pathname: getPath(item),
            state: { data: item.data },
          }}
        >
          <button type="button" className="btn btn-sm btn-primary">
            View
          </button>
        </Link>
      </td>
    </tr>
  );
}
