import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>UPLOAD STATS</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTipes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
