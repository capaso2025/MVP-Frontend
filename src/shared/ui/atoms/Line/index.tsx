function Line(props: { width?: string }) {
  const { width = 'w-full' } = props;
  return (
    <div
      className={`via-primary h-[1px] flex-1 bg-gradient-to-r from-transparent to-transparent ${width}`}
    />
  );
}

export default Line;
