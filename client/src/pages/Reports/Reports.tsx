import React, { useEffect, useState } from 'react';
import { getTransactions } from '../../apiCalls';
import { Select } from '../../components';
import './reports.scss';

export const Reports: React.FC = () => {

  const [transactions, setTransactions] = useState<any[]>([]);
  const [reportRange, setReportRange] = useState('allTime');

  useEffect(() => {
    getTransactions();
  }, []);

  const incomeArray = transactions.filter(t => t.type === 'income');
  const expenseArray = transactions.filter(t => t.type === 'expense');

  const transformedArray = (arr: any[], range: string) => {
    const date = new Date();

    switch (range) {
      case 'month':
        return arr.filter((t: any) => t.dateCreated.split('-')[1] === date.getMonth() + 1);
      case 'annual':
        return arr.filter((t: any) => t.dateCreated.split('-')[0] === date.getFullYear());
      default:
        return arr;
    }
  };

  const incomeToDisplay = transformedArray(incomeArray, reportRange);
  const expensesToDisplay = transformedArray(expenseArray, reportRange);

  return (
    <div className='reports'>
      <form>
        <Select value={reportRange} onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => setReportRange(target.value)}>
          <option value='allTime'>All time</option>
          <option value='annual'>Annual</option>
          <option value='month'>Month</option>
        </Select>
      </form>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>
          Reports:
        </span>
        <span>
          Total income: {incomeToDisplay.reduce(function (acc, t) { return acc + t.amount; }, 0)}
        </span>
        <span>
          Total expenses: {expensesToDisplay.reduce(function (acc, t) { return acc + t.amount; }, 0)}
        </span>
      </div>
    </div>
  );
};
