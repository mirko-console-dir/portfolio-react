const ModalContentFeedback = ({ image, title }: { image: string, title: string }) => {
  return (
    <img
      src={image}
      alt={`feedback_by-${title}`}
      className="w-full object-cover self-center"
    />
  );
};

export default ModalContentFeedback;
