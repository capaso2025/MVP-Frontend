import styles from './styles.module.css';

export default function LearnButton(props: {
  className?: string;
  onClick?: () => void;
}) {
  const { className = '', onClick } = props;
  return (
    <button
      className={`${styles['btn-class-name']} ${className}`}
      onClick={onClick}
    >
      <span className={styles.back}></span>
      <span className={styles.front}></span>
    </button>
  );
}
