import { useState } from "react";
import * as THREE from "three";

const sphereGeometry = new THREE.IcosahedronGeometry(1, 30);
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const coneGeometry = new THREE.ConeGeometry(1, 1, 4, 1);
const birdMaterial = new THREE.MeshStandardMaterial({ color: "#ffffff" });
const legMaterial = new THREE.MeshStandardMaterial({ color: "#fc5454" });
const eyeMaterial = new THREE.MeshStandardMaterial({ color: "#000000" });

const topFeatherGeometry = new THREE.BoxGeometry(0.2, 0.8, 1.6);
const topFeatherMatrix = new THREE.Matrix4();
topFeatherMatrix.makeShear(0, 0, 0, 0, 0, -0.6);
topFeatherGeometry.applyMatrix4(topFeatherMatrix);

const bottomFeatherGeometry = new THREE.BoxGeometry(0.2, 0.4, 1.6);
const bottomFeatherMatrix = new THREE.Matrix4();
bottomFeatherMatrix.makeShear(0, 0, 0, 0, 0, -0.2);
bottomFeatherGeometry.applyMatrix4(bottomFeatherMatrix);

export default function Bird({ position }) {
  return (
    <group position={position} scale={0.25}>
      {/* Body*/}
      <mesh
        geometry={sphereGeometry}
        material={birdMaterial}
        scale={[1, 0.85, 1]}
      />

      {/* Eyes */}
      <group position={[0, 0.4, 0.9]}>
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
        material={legMaterial}
        position={[0, -0.3, 1.3]}
        scale={[0.4, 1, 0.4]}
        rotation={[Math.PI * 0.6, 0, 0]}
      />

      {/* Feathers */}
      <group position={[0, 0, -1.4]}>
        <mesh
          geometry={topFeatherGeometry}
          material={birdMaterial}
          position={[0, 0.3, 0]}
        />
        <mesh
          geometry={bottomFeatherGeometry}
          material={birdMaterial}
          position={[0, -0.3, 0]}
        />
      </group>

      {/* Left leg */}
      <group position={[0.4, 0.1, 0]}>
        <mesh
          geometry={boxGeometry}
          material={legMaterial}
          position={[0, -1.3, 0]}
          scale={[0.1, 1, 0.1]}
        />
        <mesh
          geometry={boxGeometry}
          material={legMaterial}
          position={[0.17, -1.8, 0.14]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0.1, Math.PI * 0.25, 0]}
        />
        <mesh
          geometry={boxGeometry}
          material={legMaterial}
          position={[0, -1.8, 0.15]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0.1, 0, 0]}
        />
        <mesh
          geometry={boxGeometry}
          material={legMaterial}
          position={[-0.17, -1.8, 0.14]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0.1, -Math.PI * 0.25, 0]}
        />
      </group>

      {/* Right leg */}
      <group position={[-0.4, 0.1, 0]}>
        <mesh
          geometry={boxGeometry}
          material={legMaterial}
          position={[0, -1.3, 0]}
          scale={[0.1, 1, 0.1]}
        />
        <mesh
          geometry={boxGeometry}
          material={legMaterial}
          position={[0.17, -1.8, 0.14]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0.1, Math.PI * 0.25, 0]}
        />
        <mesh
          geometry={boxGeometry}
          material={legMaterial}
          position={[0, -1.8, 0.15]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0.1, 0, 0]}
        />
        <mesh
          geometry={boxGeometry}
          material={legMaterial}
          position={[-0.17, -1.8, 0.14]}
          scale={[0.1, 0.1, 0.4]}
          rotation={[0.1, -Math.PI * 0.25, 0]}
        />
      </group>
    </group>
  );
}
