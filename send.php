<?php

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];
$userQuestions = $_POST['userQuestions'];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'skiff2140@yandex.ru';                     // SMTP username
    $mail->Password   = 'Yudakov2@16';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('skiff2140@yandex.ru', 'Влад');
    $mail->addAddress('skiff2140@gmail.com');     // Add a recipient
     
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}, уго почта ${userEmail}";
  

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Пимсьмо не отправлено: {$mail->ErrorInfo}";
    }
    
    
} catch (Exception $e) {
    echo "Пимсьмо не отправлено: {$mail->ErrorInfo}";
}

?>