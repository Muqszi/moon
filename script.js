// Function to move an element to a random position within the viewport
function moveRandomEl(elm) {
  // Ensure the element is positioned absolutely
  elm.style.position = "absolute";

  // Calculate a random top position, keeping the element within bounds
  const randomTop = Math.floor(Math.random() * (window.innerHeight - elm.offsetHeight)) + "px";

  // Calculate a random left position, keeping the element within bounds
  const randomLeft = Math.floor(Math.random() * (window.innerWidth - elm.offsetWidth)) + "px";

  // Apply the random positions
  elm.style.top = randomTop;
  elm.style.left = randomLeft;
}

// Get the element with the id 'move-random'
const moveRandom = document.querySelector("#move-random");

// Add an event listener that triggers the move when the mouse enters the element
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// Background Audio - Play continuously across all pages

// Create the audio element if it doesn't exist already
const bgAudio = document.createElement("audio");
bgAudio.id = "bg-audio"; // Set the ID for the audio element
bgAudio.src = "path/to/your/audio.mp3"; // Replace with the path to your audio file
bgAudio.autoplay = true; // Auto-play the audio
bgAudio.loop = true; // Loop the audio
bgAudio.muted = false; // Set it to unmuted by default

// Append the audio element to the body (or head if you prefer)
document.body.appendChild(bgAudio);

// Optional: Allow user to mute/unmute the audio
const muteButton = document.createElement("button");
muteButton.textContent = "Mute/Unmute Audio";
document.body.appendChild(muteButton);

// Mute/unmute functionality
muteButton.addEventListener("click", function() {
  bgAudio.muted = !bgAudio.muted; // Toggle the mute state
  muteButton.textContent = bgAudio.muted ? "Unmute Audio" : "Mute Audio"; // Update button text based on state
});
