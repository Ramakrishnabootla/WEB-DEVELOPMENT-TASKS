// script.js
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const submitButton = document.getElementById("submit-name");
    const wheelSection = document.getElementById("wheel-section");
    const spinButton = document.getElementById("spin-button");
    const resultSection = document.getElementById("result-section");
    const resultText = document.getElementById("result");
    const wheel = document.querySelector(".wheel");
    const fireworksContainer = document.getElementById("fireworks-container");
    const winSound = document.getElementById("win-sound");
  
    let userName = "";
    let hasSpun = false; // Track if the wheel has been spun
  
    // Step 1: Submit name and show wheel
    submitButton.addEventListener("click", () => {
      userName = nameInput.value.trim();
      if (userName) {
        document.getElementById("name-input-section").classList.add("hidden");
        wheelSection.classList.remove("hidden");
      } else {
        alert("Please enter your name.");
      }
    });
  
    // Step 2: Spin the wheel
    spinButton.addEventListener("click", () => {
      if (hasSpun) {
        alert("You can only spin the wheel once!");
        return;
      }
  
      const nameLength = userName.length;
      const isOdd = nameLength % 2 !== 0;
  
      // Determine target partitions
      const targetPartitions = isOdd ? [1, 3, 5, 7] : [2, 4, 6, 8];
      const randomTarget = targetPartitions[Math.floor(Math.random() * targetPartitions.length)];
  
      // Calculate rotation angle
      const rotationAngle = 360 * 5 + (randomTarget - 1) * 45; // 5 full spins + offset
  
      // Apply rotation
      wheel.style.transform = `rotate(${rotationAngle}deg)`;
  
      // Disable and remove spin button
      spinButton.remove();
      hasSpun = true;
  
      // Show result after spin
      setTimeout(() => {
        const finalAngle = rotationAngle % 360; // Normalize to 0-360 degrees
        const partitionSize = 45; // Each partition is 45 degrees
        const resultPartition = Math.floor(finalAngle / partitionSize) + 1; // Determine the partition
  
        // Add blinking effect to the selected partition
        const selectedPartition = document.querySelector(`.wheel-partition[data-number="${resultPartition}"]`);
        selectedPartition.classList.add("selected");
  
        // Play win sound
        winSound.play();
  
        // Show result with pop animation
        resultText.textContent = `${userName}, you won Prize ${resultPartition}!`;
        resultSection.classList.remove("hidden");
  
        // Trigger effects
        createFireworks(); // Trigger fireworks
        launchRockets(); // Launch rockets
        createFallingStars(); // Create falling stars
        createSparkles(); // Create sparkles
        createConfetti(); // Create confetti
      }, 3000); // Match the spin duration
    });
  
    // Fireworks effect
    function createFireworks() {
      setInterval(() => {
        for (let i = 0; i < 10; i++) {
          const firework = document.createElement("div");
          firework.classList.add("firework");
          firework.style.left = `${Math.random() * 100}vw`;
          firework.style.top = `${Math.random() * 100}vh`;
          fireworksContainer.appendChild(firework);
  
          // Remove firework after animation
          setTimeout(() => {
            firework.remove();
          }, 2000);
        }
      }, 1000); // Continuous fireworks
    }
  
    // Rocket effect
    function launchRockets() {
      setInterval(() => {
        for (let i = 0; i < 2; i++) {
          const rocket = document.createElement("div");
          rocket.classList.add("rocket");
          rocket.style.left = `${Math.random() * 90}vw`;
          fireworksContainer.appendChild(rocket);
  
          // Remove rocket after animation
          setTimeout(() => {
            rocket.remove();
          }, 6000);
        }
      }, 3000); // Continuous rockets
    }
  
    // Falling stars effect
    function createFallingStars() {
      setInterval(() => {
        for (let i = 0; i < 5; i++) {
          const star = document.createElement("div");
          star.classList.add("falling-star");
          star.style.left = `${Math.random() * 100}vw`;
          fireworksContainer.appendChild(star);
  
          // Remove star after animation
          setTimeout(() => {
            star.remove();
          }, 6000);
        }
      }, 2000); // Continuous falling stars
    }
  
    // Sparkles effect
    function createSparkles() {
      setInterval(() => {
        for (let i = 0; i < 10; i++) {
          const sparkle = document.createElement("div");
          sparkle.classList.add("sparkle");
          sparkle.style.left = `${Math.random() * 100}vw`;
          sparkle.style.top = `${Math.random() * 100}vh`;
          fireworksContainer.appendChild(sparkle);
  
          // Remove sparkle after animation
          setTimeout(() => {
            sparkle.remove();
          }, 2000);
        }
      }, 1000); // Continuous sparkles
    }
  
    // Confetti effect
    function createConfetti() {
      setInterval(() => {
        for (let i = 0; i < 20; i++) {
          const confetti = document.createElement("div");
          confetti.classList.add("confetti");
          confetti.style.left = `${Math.random() * 100}vw`;
          fireworksContainer.appendChild(confetti);
  
          // Remove confetti after animation
          setTimeout(() => {
            confetti.remove();
          }, 6000);
        }
      }, 2000); // Continuous confetti
    }
  });