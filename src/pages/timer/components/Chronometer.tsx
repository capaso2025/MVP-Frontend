function Chronometer(props: {
  minutes: number;
  seconds: number;
  progress: number;
}) {
  const { minutes, seconds, progress } = props;
  return (
    <div className="relative mb-8 h-64 w-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-5xl font-bold tabular-nums">
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </div>
      </div>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className="stroke-current text-gray-200"
          strokeWidth="4"
          fill="transparent"
          r="46"
          cx="50"
          cy="50"
        />
        <circle
          className="text-primary-light border-none stroke-current transition-all"
          strokeWidth="5"
          strokeDasharray={`${progress * 2.89} 289`}
          strokeLinecap="round"
          fill="transparent"
          r="46"
          cx="50"
          cy="50"
        />
      </svg>
    </div>
  );
}

export default Chronometer;
