import { Typography } from "@/shared/ui";
import Spacer from "@/shared/ui/atoms/Spacer";
function InfoSection(props: {
  image?: string;
  imgPosition?: "left" | "right";
  title?: string;
  description?: string;
  color?: string;
}) {
  const { image, imgPosition = "right", description = "", color = "", title = "" } = props;
  return <div className={`flex flex-col items-start justify-between gap-8 lg:gap-0 ${imgPosition === "left" ? "lg:flex-row-reverse" : "flex-row"}`}>
    <div className="max-w-[50%]">
      <Typography variant="h2" className={`${color || "text-primary-light"} ${imgPosition === "left" ? "text-right" : "text-left"}`}>
        {title}
      </Typography>
      <Spacer size="lg" />
      <Typography variant="h4" className={`${color || "text-primary-light"} ${imgPosition === "left" ? "text-right" : "text-left"}`}>
        {description}
      </Typography>
    </div>
    <img src={image} className={imgPosition === "left" ? "mr-auto ml-0" : "ml-auto mr-0"} width={400} />
  </div>
};

export default InfoSection;