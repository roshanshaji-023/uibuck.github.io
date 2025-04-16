document.getElementById("internship-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      track: document.querySelector('input[name="track"]:checked').value, // For Python or Web Development
      reason: document.getElementById("reason").value,
    };
  
    // Send data to Google Sheets using the web app URL
    const response = await fetch('https://script.google.com/macros/s/AKfycbylBBk_2e5WfMbNNCVOie9l0P9iH9n6woMc2p77Qap3yg94m6FowDDRqplA1PH1TvYm/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // Handle response
    const result = await response.text();
    if (result === "Success") {
      alert("Your application has been submitted successfully!");
    } else {
      alert("There was an issue with your submission. Please try again.");
    }
  });
  