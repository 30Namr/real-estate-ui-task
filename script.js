document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("propertyForm");
    const submitBtn = document.querySelector(".submit-btn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Bootstrap style validation
        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }

        // Disable button & show loading state
        submitBtn.disabled = true;
        submitBtn.innerText = "Submitting...";

        // Fake API delay (frontend task simulation)
        setTimeout(() => {

            // Success message
            showSuccessMessage();

            // Reset form
            form.reset();
            form.classList.remove("was-validated");

            // Restore button
            submitBtn.disabled = false;
            submitBtn.innerText = "SUBMIT";

        }, 1500); // 1.5 sec delay
    });

    function showSuccessMessage() {

        let existingAlert = document.querySelector(".custom-alert");
        if (existingAlert) existingAlert.remove();

        const alertBox = document.createElement("div");
        alertBox.className = "alert alert-success mt-3 custom-alert";
        alertBox.innerText = "Thank you! We will contact you soon.";

        form.appendChild(alertBox);

        // Auto remove after 3 sec
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }

});
