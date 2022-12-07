import React from 'react';
import { deleteTransaction } from '../../apiCalls';
import { Button } from '../Button/Button';
import './table.scss';

interface TableProps extends React.HTMLProps<HTMLTableElement> {
  title?: string;
  transactionArray?: any[];
  transactionType?: string;
  setTransactionArray: React.Dispatch<React.SetStateAction<any>>;
}

export const Table: React.FC<TableProps> = ({
  title,
  transactionArray,
  transactionType,
  setTransactionArray
}) => {

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
    transaction: any
  ) => {
    e.preventDefault();
    if (window.confirm(`delete ${transaction.name}?`)) {
      deleteTransaction(transaction.id);
      setTransactionArray(transactionArray?.filter((i) => {
        return transaction.id !== i.id;
      }));
    }
  };

  return (
    <div className='table-wrapper'>
      <h2 className='table-title' id={title?.toLowerCase()}>{title}</h2>
      {transactionArray &&
        transactionArray.filter(transaction => transaction.type === transactionType).length > 0 ?
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
                  <td className='transaction-name'>{transaction.name}</td>
                  <td className='transaction-amount align-right'>${transaction.amount}</td>
                  <td className='align-center padding-none width-s'>
                    <Button
                      variant='delete'
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete(e, transaction)}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot className='table-foot'>
            <tr>
              <td className='total-title'>Total</td>
              <td className='total-amount align-right'>
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
        :
        <span>No transcations yet...</span>
      }
    </div>
  );
};
