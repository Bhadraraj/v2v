<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/phpmailer/phpmailer/src/Exception.php';
require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
require './vendor/phpmailer/phpmailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? $_POST["name"] : '';
    $email = isset($_POST["email"]) ? $_POST["email"] : '';
    $mobile = isset($_POST["mobile"]) ? $_POST["mobile"] : '';
    $message = isset($_POST["message"]) ? $_POST["message"] : '';

    error_log("Received data: Name: $name, Email: $email, Mobile: $mobile, Message: $message");
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'visiontovoice.v2v@gmail.com';
        $mail->Password = 'xtbnhhqnvxriqyxj';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('visiontovoice.v2v@gmail.com', 'Manager'); 
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'General Inquiry';
        // Content
        $mail->isHTML(true);
        $body = '<table border="1" cellspacing="0" style="border-collapse: collapse; width: 100%;">';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($name) . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($email) . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Mobile</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($mobile) . '</td></tr>';
        $body .= '<tr><td style="padding: 8px; border: 1px solid #ddd;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">' . htmlspecialchars($message) . '</td></tr>';
        $body .= '</table>';

        $mail->Body = $body;


        $mail->send();
        echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
}
?>
