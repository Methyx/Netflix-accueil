const Section = ({ category, images }) => {
  return (
    <div className="section">
      <h2>{category}</h2>
      <div className="images-band">
        {images.map((img_link, index) => {
          return <img key={index} src={img_link} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Section;
