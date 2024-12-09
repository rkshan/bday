const heart = document.getElementById('heart');
const letter = document.getElementById('letter');
const close = document.getElementById('close');
const playSongButton = document.getElementById('playSong');

// Show the love letter on heart click
heart.addEventListener('click', () => {
    letter.classList.remove('hidden');
});

// Hide the love letter on close click
close.addEventListener('click', () => {
    letter.classList.add('hidden');
});

// Play the song when the play button is clicked
playSongButton.addEventListener('click', () => {
    const audio = new Audio('song.mp3');
    audio.loop = true; // Loop the song
    audio.play();

    // Optional: Disable the button after the song starts
    playSongButton.disabled = true;
    playSongButton.innerText = 'Playing...';
});
