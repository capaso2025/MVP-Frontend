import Spacer from "../../atoms/Spacer";
import AvatarDetails from "./avatar-details";
import Indicators from "./indicators";
import LevelProgress from "./level-progress";

function UserStats() {
  return <div>
    <LevelProgress />
    <Spacer size="lg" />
    <Indicators />
    <Spacer size="lg" />
    <AvatarDetails />
  </div>
};

export default UserStats;