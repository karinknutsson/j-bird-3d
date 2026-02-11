import { Physics } from "@react-three/rapier";
import { useEffect } from "react";
import Lights from "./Lights.jsx";
import Pyramid from "./pyramid/Pyramid.jsx";
import Enemies from "./enemies/Enemies.jsx";
import useGame from "./stores/useGame.js";
import gsap from "gsap";
import { useKeyboardControls } from "@react-three/drei";

export default function Experience() {
  const [subscribeKeys] = useKeyboardControls();

  const {
    phase,
    cubeCount,
    cubeHits,
    pause,
    unpause,
    ready,
    score,
    currentLevel,
    layerCount,
    incrementCurrentLevel,
    incrementLayerCount,
    resetCubeHits,
    incrementScore,
    enemyInterval,
    setEnemyInterval,
    resetGame,
    restartCount,
    incrementRestartCount,
  } = useGame();

  /**
   * Restart the game by pressing button (mobile) or spacebar (desktop)
   */
  function restartGame() {
    resetGame();
    incrementRestartCount();
    ready();
    gsap.to(".game-over-container", { opacity: 0, duration: 0.5 });
  }

  const restartButton = document.querySelector(".restart-button");
  restartButton.addEventListener("click", () => restartGame());

  useEffect(() => {
    const unsubscribeRestart = subscribeKeys(
      (state) => state.restart,
      (value) => {
        if (!value) return;

        console.log("Restart key pressed");

        if (phase === "ended") restartGame();
      },
    );
    return () => {
      unsubscribeRestart();
    };
  }, [phase]);

  /**
   * Keep track of current score and level and update values in the interface
   */
  useEffect(() => {
    const scoreValue = document.querySelector(".score-value");
    if (scoreValue) scoreValue.textContent = score;

    const scoreValueMobile = document.querySelector(".score-value-mobile");
    if (scoreValueMobile) scoreValueMobile.textContent = score;
  }, [score]);

  useEffect(() => {
    const levelValue = document.querySelector(".level-value");
    if (levelValue) levelValue.textContent = currentLevel;

    const levelValueMobile = document.querySelector(".level-value-mobile");
    if (levelValueMobile) levelValueMobile.textContent = currentLevel;
  }, [currentLevel]);

  /**
   * Check if player has hit all cubes in the current level
   */
  useEffect(() => {
    if (phase === "playing" && cubeHits >= cubeCount) {
      // Pause game and show level won message
      setTimeout(() => {
        pause();
        incrementScore(200 * currentLevel);

        gsap.to(".level-won-container", {
          opacity: 1,
          duration: 0.5,
        });
      }, 300);

      // Prepare next level, unpause game and remove level won message
      setTimeout(() => {
        resetCubeHits();
        incrementCurrentLevel();
        if (enemyInterval > 3000) setEnemyInterval(enemyInterval * 0.9);

        if (layerCount < 6) incrementLayerCount();

        ready();
        unpause();

        gsap.to(".level-won-container", {
          opacity: 0,
          duration: 0.5,
        });
      }, 3300);
    }
  }, [cubeHits]);

  return (
    <>
      {/* Physics pause when game pauses */}
      <Physics paused={phase === "pause"}>
        <Lights />

        {/* Pyramid set to rerender when level restarts */}
        <Pyramid key={restartCount} />

        {/* Show enemies from level 3 */}
        {layerCount > 2 && <Enemies />}
      </Physics>
    </>
  );
}
