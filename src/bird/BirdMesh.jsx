import * as THREE from "three";

export default function BirdMesh() {
  return (
    <group position={position} scale={0.2}>
      {/* Bird body */}
      <mesh
        geometry={sphereGeometry}
        material={birdMaterial}
        scale={[1, 0.85, 0.85]}
      />

      {/* Eyes */}
      <group position={[0, 0.4, 0.78]}>
        <mesh
          geometry={sphereGeometry}
          material={eyeMaterial}
          position={[0.3, 0, 0]}
          scale={[0.11, 0.11, 0.11]}
        />
        <mesh
          geometry={sphereGeometry}
          material={eyeMaterial}
          position={[-0.3, 0, 0]}
          scale={[0.11, 0.11, 0.11]}
        />
      </group>

      {/* Beek */}
      <mesh
        geometry={coneGeometry}
        material={detailMaterial}
        position={[0, -0.3, 1.26]}
        scale={[0.4, 1.2, 0.4]}
        rotation={[Math.PI * 0.6, 0, 0]}
      />

      {/* Feathers */}
      <group position={[0, 0.1, -1]}>
        <mesh
          geometry={topFeatherGeometry}
          material={birdMaterial}
          position={[0, 0.3, 0]}
        />
        <mesh
          geometry={bottomFeatherGeometry}
          material={birdMaterial}
          position={[0, -0.2, 0]}
        />
      </group>

      {/* Left leg */}
      <group position={[0.4, 0.1, 0]}>
        <mesh
          geometry={boxGeometry}
          material={detailMaterial}
          position={[0, -1.3, 0]}
          scale={[0.1, 1, 0.1]}
        />
        <mesh
          geometry={boxGeometry}
          material={detailMaterial}
          position={[0.17, -1.8, 0.14]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0, Math.PI * 0.25, 0]}
        />
        <mesh
          geometry={boxGeometry}
          material={detailMaterial}
          position={[0, -1.8, 0.15]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={boxGeometry}
          material={detailMaterial}
          position={[-0.17, -1.8, 0.14]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0, -Math.PI * 0.25, 0]}
        />
      </group>

      {/* Right leg */}
      <group position={[-0.4, 0.1, 0]}>
        <mesh
          geometry={boxGeometry}
          material={detailMaterial}
          position={[0, -1.3, 0]}
          scale={[0.1, 1, 0.1]}
        />
        <mesh
          geometry={boxGeometry}
          material={detailMaterial}
          position={[0.17, -1.8, 0.14]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0, Math.PI * 0.25, 0]}
        />
        <mesh
          geometry={boxGeometry}
          material={detailMaterial}
          position={[0, -1.8, 0.15]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0, 0, 0]}
        />
        <mesh
          geometry={boxGeometry}
          material={detailMaterial}
          position={[-0.17, -1.8, 0.14]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0, -Math.PI * 0.25, 0]}
        />
      </group>
    </group>
  );
}
