import { Typography } from "@/shared/ui";

function Avatar(props: {
  user: string
}) {
  const { user } = props;
  return <div className="text-center">
    <Typography variant="h5" className="text-primary text-left mb-2">
      Hola, <span className="text-primary-2 font-bold">{user}</span>
    </Typography>
    <img
      src="/assets/characters/capo-example.png"
      alt="Capaso"
      width={250}
      height={250}
      className="mx-auto w-[60%] lg:w-[250px]"
    />
    <small className="text-center">Nivel 1 - Progreso personal</small>
  </div>
};

export default Avatar;