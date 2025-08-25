import { Button } from "../../atoms/Button";
import { Typography } from "../../atoms/Typography";
function ResponseModal(props: {
  message: string;
  type: 'success' | 'error';
  onClick: () => void;
}) {
  const { message, type, onClick } = props;
  return <div className="text-center p-6">
    <img className="mx-auto" src={
      type === 'success' ? '/assets/characters/capito-happy.png' : '/assets/characters/capito-confused.png'
    } alt="image" width={200} height={200} />
    <Typography variant="h5" className="font-normal my-5">{message}</Typography>
    <Button onClick={onClick}>Volver a intentar</Button>
  </div>
};

export default ResponseModal;