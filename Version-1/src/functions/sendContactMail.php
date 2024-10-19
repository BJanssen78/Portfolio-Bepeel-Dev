<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $company = trim($_POST['company'] ?? '');
    $preferredContact = trim($_POST['preferredContact'] ?? '');
    $bestTime = trim($_POST['bestTime'] ?? '');
    $projectName = trim($_POST['projectName'] ?? '');
    $existingProject = trim($_POST['existingProject'] ?? '');
    $typeOfProject = trim($_POST['typeOfProject'] ?? '');
    $projectDescription = trim($_POST['projectDescription'] ?? '');
    $typeOfService = trim($_POST['typeOfService'] ?? '');
    $otherTypeOfService = trim($_POST['otherTypeOfService'] ?? '');
    $timeline = trim($_POST['timeline'] ?? '');
    $budget = trim($_POST['budget'] ?? '');

    // Create a session ID in the format yymmddHHMMss[company]
    $sessionId = date('ymdHis') . "$company";

    // Prepare the email content
    $emailContent = "Name: $name\n\n";
    $emailContent .= "Email: $email\n\n";
    $emailContent .= "Phone: $phone\n\n";
    $emailContent .= "Company: $company\n\n";
    $emailContent .= "Preferred Contact Method: $preferredContact\n\n";
    $emailContent .= "Best Time to Contact: $bestTime\n\n";
    $emailContent .= "Project Name: $projectName\n\n";
    $emailContent .= "Existing Project: $existingProject\n\n";
    $emailContent .= "Type of Project: $typeOfProject\n\n";
    $emailContent .= "Project Description: $projectDescription\n\n";
    $emailContent .= "Type of Service: $typeOfService\n\n";
    $emailContent .= "Other Type of Service: $otherTypeOfService\n\n";
    $emailContent .= "Timeline: $timeline\n\n";
    $emailContent .= "Budget: $budget\n\n";

    // Email details
    $to = 'your-email@example.com'; // Replace with your email address
    $subject = "$sessionId contact request";
    $headers = "From: noreply@bpewebdev.nl\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email to the receiver
    mail($to, $subject, $emailContent, $headers);

    // Send a copy to the user
    mail($email, $subject, $emailContent, $headers);

    // Redirect or inform the user
    echo 'Thank you for your submission!';
} else {
    echo 'Invalid request method';
}
?>