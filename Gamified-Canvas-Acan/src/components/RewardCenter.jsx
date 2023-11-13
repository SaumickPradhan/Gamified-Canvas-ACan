import React from 'react';
import './RewardCenter.css';
import VerticalNavBar from './VerticalNavBar';

const RewardCenter = () => {
  // Sample transactions data
  const transactions = [
    { id: 1, type: 'Credit', description: 'You submitted the assignment 5 days before the deadline', points: 20 },
    { id: 2, type: 'Debit', description: 'Late submission of quiz', points: -10 },
    { id: 3, type: 'Credit', description: 'Received bonus points for participation', points: 15 },
    { id: 4, type: 'Credit', description: 'Completed extra credit assignment', points: 25 },
    { id: 5, type: 'Debit', description: 'Missed attendance for the online lecture', points: -5 },
    // Add more transactions as needed
  ];
  // Calculate the total points
  const totalPoints = transactions.reduce((total, transaction) => total + transaction.points, 0);

  return (
    <div> < VerticalNavBar/>
    <div className="reward-center">

      <h1>Reward Center</h1>
      
      <div className="total-points">
        <p>Total Points: {totalPoints}</p>
      </div>

      <div className="transaction-list">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className={transaction.points > 0 ? 'credit' : 'debit'}>
                <td>{transaction.type}</td>
                <td>{transaction.description}</td>
                <td>{transaction.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default RewardCenter;