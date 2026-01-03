import useGame from "./stores/useGame";
import BirdMesh from "./bird/BirdMesh";

export default function Interface() {
  const extraLives = useGame((state) => state.extraLives);

  return (
    <>
      {[...Array(extraLives)].map((life, index) => {
        return <BirdMesh key={index} position={[0, 4 - index, 0]} />;
      })}
    </>
  );
}
