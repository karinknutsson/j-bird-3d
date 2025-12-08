import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: "#8080FF" });
const cubeSize = 0.5;

export function Cube({ position }) {
  return (
    <mesh
      geometry={boxGeometry}
      material={cubeMaterial}
      scale={[cubeSize, cubeSize, cubeSize]}
      position={position}
    ></mesh>
  );
}

function getCubeRing(level) {
  const cubes = [];

  for (let x = -level; x <= level; x++) {
    const z = level - Math.abs(x);

    if (z === 0) {
      cubes.push([x, 0, 0]);
    } else {
      cubes.push([x, 0, z]);
      cubes.push([x, 0, -z]);
    }
  }

  return cubes;
}

export function CubeLevel({ level }) {
  const cubeCount = Math.pow(level + 1, 2);
  const positions = getCubeRing(level);

  return (
    <group position={[0, -level * cubeSize, 0]}>
      {positions.map((p, index) => {
        return (
          <Cube key={index} position={[p[0] * cubeSize, 0, p[2] * cubeSize]} />
        );
      })}
    </group>
  );
}

export default function Pyramid({ levelCount = 5 }) {
  return (
    <>
      {[...Array(levelCount)].map((_, index) => {
        return <CubeLevel key={index} level={index} />;
      })}
    </>
  );
}
