import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import * as THREE from "three";

export default create(
  subscribeWithSelector((set) => {
    return {
      /**
       * Levels and layers
       */
      currentLevel: 1,
      layerCount: 2,
      livesCount: 4,

      incrementCurrentLevel: () => {
        set((state) => {
          return {
            currentLevel: state.currentLevel + 1,
          };
        });
      },

      incrementLayerCount: () => {
        set((state) => {
          return {
            layerCount: state.layerCount + 1,
          };
        });
      },

      /**
       * Enemies
       */
      enemyInterval: 6000,

      setEnemyInterval: (value) => {
        set((_) => {
          return {
            enemyInterval: value,
          };
        });
      },

      /**
       * Restart and reset
       */
      restartCount: 0,

      incrementRestartCount: () =>
        set((state) => ({ restartCount: state.restartCount + 1 })),

      resetGame: () => {
        set((_) => {
          return {
            currentLevel: 1,
            layerCount: 2,
            enemyInterval: 6000,
            cubeHits: 0,
            score: 0,
            livesCount: 4,
          };
        });
      },

      /**
       * Cubes
       */
      cubeCount: 0,
      cubeHits: 0,

      setCubeCount: (count) => {
        set((_) => {
          return {
            cubeCount: count,
          };
        });
      },

      incrementCubeHits: () => {
        set((state) => {
          return {
            cubeHits: state.cubeHits + 1,
          };
        });
      },

      resetCubeHits: () => {
        set((_) => {
          return {
            cubeHits: 0,
          };
        });
      },

      /**
       * Score
       */
      score: 0,

      incrementScore: (value) => {
        set((state) => {
          return {
            score: state.score + value,
          };
        });
      },

      /**
       * Camera
       */
      isCameraMoving: false,
      cameraPosition: 0,

      cameraPositions: [
        new THREE.Vector3(5, 6, 5),
        new THREE.Vector3(-5, 6, 5),
        new THREE.Vector3(-5, 6, -5),
        new THREE.Vector3(5, 6, -5),
      ],

      moveCamera: (direction) => {
        set((state) => {
          const nextPosition =
            direction === "clockwise"
              ? state.cameraPosition === 3
                ? 0
                : state.cameraPosition + 1
              : state.cameraPosition === 0
                ? 3
                : state.cameraPosition - 1;

          return {
            isCameraMoving: true,
            cameraPosition: nextPosition,
          };
        });
      },

      stopCamera: () => {
        set((_) => {
          return {
            isCameraMoving: false,
          };
        });
      },

      /**
       * Light
       */
      lightPositions: [
        new THREE.Vector3(-4, 4, 1),
        new THREE.Vector3(-1, 4, -4),
        new THREE.Vector3(4, 4, -1),
        new THREE.Vector3(1, 4, 4),
      ],

      /**
       * Phases
       */
      phase: "ready",

      start: () => {
        set((state) => {
          console.log("start called");
          if (state.phase === "ready") {
            console.log("starting");
            return {
              phase: "playing",
            };
          }

          return {};
        });
      },

      ready: () => {
        console.log("ready");
        set((_) => {
          return {
            phase: "ready",
          };
        });
      },

      pause: () => {
        console.log("pause");
        set(() => {
          return {
            phase: "pause",
          };
        });
      },

      unpause: () => {
        console.log("unpause");
        set(() => {
          return {
            phase: "ready",
          };
        });
      },

      restart: () => {
        console.log("restart called");
        set((state) => {
          if (state.phase === "playing" || state.phase === "ended")
            console.log("restarting");
          return {
            phase: "ready",
          };

          return {};
        });
      },

      end: () => {
        console.log("ended");
        set((_) => {
          return {
            phase: "ended",
          };
        });
      },
    };
  }),
);
