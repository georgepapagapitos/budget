import React from 'react';
import { deleteItem } from '../../apiCalls';
import { Button } from '../Button/Button';
import './table.scss';

export const Table = ({ itemArray, itemType, setItemArray }) => {

  const handleDelete = async (e, item) => {
    e.preventDefault();
    if (window.confirm(`delete ${item.name}?`)) {
      deleteItem(item.id);
      setItemArray(itemArray.filter((i) => {
        return item.id !== i.id;
      }));
    }
  };

  return (
    <table className='table'>
      <thead className='table-head'>
        <tr>
          <th>Name</th>
          <th className='align-right'>Amount</th>
          <th className='padding-none'></th>
        </tr>
      </thead>
      <tbody className='table-body'>
        {itemArray
          .filter(item => item.type === itemType)
          .map((item, i) => (
            <tr key={`item-${i}`}>
              <td>{item.name}</td>
              <td className='align-right'>${item.amount}</td>
              <td className='align-center padding-none'>
                <Button
                  variant='delete'
                  onClick={(e) => handleDelete(e, item)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot className='table-foot'>
        <tr>
          <td>Total</td>
          <td className='align-right'>
            ${itemArray
              .filter(item => item.type === itemType)
              .reduce((acc, item) => acc + item.amount, 0)
              .toFixed(2)
            }
          </td>
          <td className='padding-none'></td>
        </tr>
      </tfoot>
    </table>
  );
};
