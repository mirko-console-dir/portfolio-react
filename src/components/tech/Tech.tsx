import { styles } from "@/css/theme/styles";
import Marquee from "./Marquee";
import Separator from "@/components/shared-components/separator/Separator";
const Tech = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <Separator sectionTitle={"Marquee"}/>
      <Marquee />
    </div>
  );
};

export default Tech;
