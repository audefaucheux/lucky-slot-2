const SlotMachine = ({ image, id }) => {
  return (
    <div id={`image-${id}`} className="slot-images-size">
      <img src={image.src} alt="placeholder" className={image.className} />
    </div>
  );
};

export default SlotMachine;
