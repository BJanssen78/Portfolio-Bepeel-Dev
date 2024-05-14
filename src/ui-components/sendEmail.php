<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $companyName = $_POST["companyName"];
    $storyline = isset($_POST["storyline"]) ? "Yes" : "No";
    $workExperience = isset($_POST["workExperience"]) ? "Yes" : "No";
    $education = isset($_POST["education"]) ? "Yes" : "No";
    $skills = isset($_POST["skills"]) ? "Yes" : "No";

    // Compose email message
    $to = "b.janssen@bepeel.nl";
    $subject = "Resume Download";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Company Name: $companyName\n";
    $message .= "Storyline: $storyline\n";
    $message .= "Work Experience: $workExperience\n";
    $message .= "Education: $education\n";
    $message .= "Skills: $skills\n";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request.";
}
?>