import { Typography } from "../../atoms/Typography/Typography";

function Paragraph(props: {
  sentences: {
    text: React.ReactNode;
    className?: string;
  }[]
}) {
  const { sentences } = props;
  return sentences.map((sentence, index) => <Typography className={`${sentence.className} mb-4`} key={index}>
    {sentence.text}
  </Typography>)
};

export default Paragraph;