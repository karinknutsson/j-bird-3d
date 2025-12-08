import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: "#8080FF" });

export function Cube() {
  return (
    <mesh
      geometry={boxGeometry}
      material={cubeMaterial}
      scale={[0.5, 0.5, 0.5]}
    ></mesh>
  );
}

export function CubeLevel({ level }) {
  return (
    <group>
      <Cube />
    </group>
  );
}

export default function Pyramid({ levelCount = 5 }) {
  return (
    <>
      {[...Array(levelCount)].map((_, index) => {
        return <CubeLevel level={index + 1} />;
      })}
    </>
  );
}
