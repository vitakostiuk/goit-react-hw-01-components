import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.rowHeaad}>
          <th className={s.cellHead}>Type</th>
          <th className={s.cellHead}>Amount</th>
          <th className={s.cellHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
