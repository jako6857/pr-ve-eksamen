// Select all the small images
let smallImages = document.querySelectorAll("#favoriteParent img:not(#mainImage)");

// Add click event listeners to each small image
smallImages.forEach((img) => {
  img.addEventListener("click", function () {
    // Swap the src of the main image with the clicked image
    let tempSrc = mainImage.src;
    mainImage.src = this.src;
    this.src = tempSrc;
  });
});



// her kommer js for min form validering 

document.addEventListener("DOMContentLoaded", function () {
    // Select the form and submit button
    const form = document.querySelector("dialog form");
    const submitButton = form.querySelector("input[type='submit']");
  
    submitButton.addEventListener("click", function (event) {
      // Prevent form from submitting
      event.preventDefault();
  
      // Select form fields
      let nameInput = document.getElementById("txtinput").value.trim();
      let efterNavnInput = document.getElementById("efterNavnInput").value.trim();
      let adresseInput = document.getElementById("adresseInput").value.trim();
      let postNummerInput = document.getElementById("postNummerInput").value.trim();
      let emailInput = document.getElementById("emailinput").value.trim();
      let companyInput = document.getElementById("txtfirma").value.trim();
      let phoneInput = document.getElementById("tlfnum").value.trim();
      let messageInput = document.getElementById("textarea").value.trim();
  
      // Validation flags
      let isValid = true;
      let errorMessage = "";
  
      // Validate name (minimum 2 characters)
      if (nameInput.length < 2) {
        isValid = false;
        errorMessage += "Navn skal være mindst 2 karakterer.\n";
      }
  
      if (efterNavnInput.length < 2) {
        isValid = false;
        errorMessage += "Efternavn skal være mindst 2 karakterer.\n";
      }
  
      if (adresseInput.length < 8) {
        isValid = false;
        errorMessage += "Adresse skal være skrevet korrekt\n";
      }
  
      if (postNummerInput.length < 4) {
        isValid = false;
        errorMessage += "Postnummer skal være mindst 4 karakterer\n";
      }
  
      // Validate email with a regex pattern
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput)) {
        isValid = false;
        errorMessage += "Indtast en gyldig email-adresse.\n";
      }
  
      // Validate company name (optional but at least 2 characters if entered)
      if (companyInput.length > 0 && companyInput.length < 2) {
        isValid = false;
        errorMessage += "Firma navn skal være mindst 2 karakterer hvis angivet.\n";
      }
  
      // Validate phone number (must be only digits and 8 characters long)
      let phonePattern = /^\d{8}$/;
      if (!phonePattern.test(phoneInput)) {
        isValid = false;
        errorMessage += "Telefonnummer skal være præcis 8 cifre.\n";
      }
  
      // Validate message (optional, but minimum 5 characters if entered)
      if (messageInput.length > 0 && messageInput.length < 5) {
        isValid = false;
        errorMessage += "Kommentar skal være mindst 5 karakterer hvis angivet.\n";
      }
  
      // Display errors or submit form
      if (!isValid) {
        alert(errorMessage); // Show error message
      } else {
        form.submit(); // Submit form if all validations pass
      }
    });
  });
  