
function openSidebar() {
    document.querySelector(".sidebar").classList.toggle("hidden");
}

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "support@kickstartlabs.io",
        Password: "C2067376532D3DF7581B93C3C1B543979651",
        To: 'info@kickstartlabs.io',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "First-Name: "
            + document.getElementById("f-name").value
            + "<br> Last-Name: "
            + document.getElementById("l-name").value
            + "<br> Email: "
            + document.getElementById("email").value
            + "<br> Message: "
            + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}