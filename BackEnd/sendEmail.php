<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/phpmailer/phpmailer/src/Exception.php';
require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
require './vendor/phpmailer/phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $contact_number = $_POST["contact_number"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);



    // xtbn hhqn vxri qyxj
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'bhadraraj.imagecbe@gmail.com'; // Your SMTP username
        $mail->Password = 'ufgwpfkqnomhadaj'; // Your SMTP password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Recipients
        // Use a valid email address you control as the sender
        $mail->setFrom('bhadraraj.imagecbe@gmail.com', 'Giantmind Solutions'); // Valid "From" address
        $mail->addAddress('bhadraraj.imagecbe@gmail.com', 'Manager'); // Recipient address

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;

        // Email body
        $body = '<table border="1" cellspacing="0" style="border-collapse: collapse; width: 100%;">';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">First Name</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($first_name) . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Last Name</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($last_name) . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($email) . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Contact Number</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($contact_number) . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Subject</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($subject) . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($message) . '</td></tr>';
        $body .= '</table>';

        $mail->Body = $body;

        // Send email
        $mail->send();
        
        // Redirect to a success page
        header("Location: success.html");
        exit;
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
