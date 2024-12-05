import { technologies } from "@/constants/tech";
import { styles } from "@/css/theme/styles";
import '@/css/marquee.css'

const Marquee = () => {
  const speed = 20;
  const items = 10;
  const state = "running";
  const translate = "items";
  const direction = "horizontal";

  const renderStamp = Date.now();
  return (
    <div
      className="container__marquee"
      data-direction={direction}
      data-translate={translate}
      data-play-state={state}
      style={{ "--speed": speed, "--count": items } as React.CSSProperties}
    >
      <ul className="marquee">
        {technologies.map((item, index) => (
          <div
            className="marquee__item"
            key={`index-${renderStamp}--${index}`}
            style={{ "--index": index } as React.CSSProperties}
          >
            <img
              className="w-[80px] h-[80px]"
              src={item.icon}
              alt={item.name}
            />
            <p className={`${styles.sectionSubText} text-center`}>
              {item.name}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
