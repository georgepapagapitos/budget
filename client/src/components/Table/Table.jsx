import React from 'react';
import { deleteTransaction } from '../../apiCalls';
import { Button } from '../Button/Button';
import './table.scss';

export const Table = ({ transactionArray, transactionType, setTransactionArray }) => {

  const handleDelete = async (e, transaction) => {
    e.preventDefault();
    if (window.confirm(`delete ${transaction.name}?`)) {
      deleteTransaction(transaction.id);
      setTransactionArray(transactionArray.filter((i) => {
        return transaction.id !== i.id;
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
        {transactionArray
          .filter(transaction => transaction.type === transactionType)
          .map((transaction, i) => (
            <tr key={`transaction-${i}`}>
              <td>{transaction.name}</td>
              <td className='align-right'>${transaction.amount}</td>
              <td className='align-center padding-none'>
                <Button
                  variant='delete'
                  onClick={(e) => handleDelete(e, transaction)}
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
            ${transactionArray
              .filter(transaction => transaction.type === transactionType)
              .reduce((acc, transaction) => acc + transaction.amount, 0)
              .toFixed(2)
            }
          </td>
          <td className='padding-none'></td>
        </tr>
      </tfoot>
    </table>
  );
};
