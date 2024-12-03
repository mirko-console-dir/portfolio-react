import { styles } from "@/css/theme/styles";
import {FeedbackCardProps} from "@/interfaces"

const FeedbackCard = ({ feedback, language, openModal }: FeedbackCardProps) => {
  const handleOpenModal = () => {
    if (feedback.image) {
      openModal(feedback.image, feedback.company);
    }
  };

  return (
    <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col">
        <p className="text-white font-black text-[48px]">"</p>
        <div className="mt-1">
          <p className="text-white tracking-wider text-[18px]">
            {feedback.testimonial[language]}
          </p>

          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">@</span> {feedback.name}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {feedback.designation} of {feedback.company}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            {feedback.image ? (
              <button
                className=" hover:text-white text-[18px] font-medium cursor-pointer neumorphism__out p-3 rounded"
                onClick={() => handleOpenModal()}
              >
                Open Original
              </button>
            ) : (
              <p className={`${styles.sectionSubText}`}>
                reference available upon request
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
