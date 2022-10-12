import Wave from "react-wavify";

const Wafes = () => {
  return (
    <Wave
      className="wave"
      fill="#fff"
      paused={false}
      options={{
        amplitude: 40,
        speed: 0.3,
        points: 9,
      }}
    />
  );
};

export default Wafes;
