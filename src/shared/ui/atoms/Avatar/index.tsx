function Avatar(props: {
  name?: string;
  src?: string;
  onClick?: () => void;
  size?: string;
}) {
  const { name, src, onClick, size = '50' } = props;
  return (
    <div
      className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-500"
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      {src ? (
        <img
          src={src}
          alt={name || 'Avatar'}
          className="rounded-full object-cover"
          style={{ width: size, height: size }}
        />
      ) : (
        <span className="text-gray-500">{name?.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}

export default Avatar;
