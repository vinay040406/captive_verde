const Heading = ({
  h2Text1,
  h2Text2,
  spanText,
  h2ClassName,
  spanClassName,
}) => {
  return (
    <h2 className={`${h2ClassName} leading-120 font-dm-serif-text`}>
      {h2Text1}
      <span className={`${spanClassName}`}> {spanText}</span>
      {h2Text2}
    </h2>
  );
};

export default Heading;
