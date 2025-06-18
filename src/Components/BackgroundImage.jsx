import bgImage from "../assets/backgroundImg.png";

const BackgroundImage = ({ imageUrl = bgImage, children }) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
