import { IconLookup, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primary } from "../../styles/globalStyles";

library.add(fas);

const homeLookUp: IconLookup = {
  prefix: "fas",
  iconName: "home",
};

const HomeIcon = (): JSX.Element => {
  return (
    <FontAwesomeIcon
      data-testid="home"
      icon={homeLookUp}
      size="lg"
      color={primary}
    />
  );
};

export default HomeIcon;
