function Container(props: { children: React.ReactNode }) {
  const { children } = props;
  return <div className="w-[90%] max-w-6xl mx-auto">{children}</div>
};

export default Container;