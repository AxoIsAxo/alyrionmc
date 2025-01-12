// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select all QA items
    const questions = document.querySelectorAll(".qa-item .question");

    // Add click event listener to each question
    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling; // Get the answer element
            if (answer.style.display === "block") {
                answer.style.display = "none"; // Hide the answer
            } else {
                answer.style.display = "block"; // Show the answer
            }
        });
    });

    // Hall of Players functionality
    const players = document.querySelectorAll(".player");
    const modal = document.getElementById("player-modal");
    const modalDescription = document.getElementById("player-description");
    const closeModal = document.querySelector(".close-btn");

    // Add click event to each player
    players.forEach(player => {
        player.addEventListener("click", () => {
            const description = player.getAttribute("data-description");
            modalDescription.textContent = description; // Update modal content
            modal.style.display = "flex"; // Show modal
        });
    });

    // Close modal on close button click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal
    });

    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none"; // Hide modal
        }
    });
});
