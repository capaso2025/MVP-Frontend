import styles from './styles.module.css';


interface SpinnerProps {
  className?: string;
}

function Spinner({ className }: SpinnerProps) {
  return (
    <div
      className={className ? `${styles["loader"]} ${className}` : styles["loader"]}
    ></div>
  );
}

export default Spinner;
