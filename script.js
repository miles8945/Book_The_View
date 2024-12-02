document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("review-form");
    const movieNameInput = document.getElementById("movie-name");
    const reviewInput = document.getElementById("review");
    const ratingInput = document.getElementById("rating");

    form.addEventListener("submit", function (event) {
        const errors = [];

        // Validate Movie Name
        if (movieNameInput.value.trim().length < 2) {
            errors.push("Movie name must be at least 2 characters long.");
        }

        // Validate Review
        if (reviewInput.value.trim().length < 10) {
            errors.push("Review must be at least 10 characters long.");
        }

        // Validate Rating
        if (ratingInput.value === "") {
            errors.push("Please select a rating.");
        }

        // Show errors or submit
        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join("\n"));
        }
    });
});
