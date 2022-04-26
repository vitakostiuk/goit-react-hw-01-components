import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <h2 className={s.task}>
      {title}
      {children}
    </h2>
  );
}

export default Section;
