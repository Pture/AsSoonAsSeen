<?php
print_r($_POST);
$sent = false;

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $from = $_POST['email'];

    $to      =  'info@assoonasseen.co.uk';
    $subject = $_POST['subject'];

    $content = '';
    $content .= "Name: " . $_POST['name'] . "\n\n";
    $content .= "Telephone: " . $_POST['telephone'] . "\n\n";
    $content .= "Email: " . $_POST['email'] . "\n\n";
    $content .= "Message: " . $_POST['message'] . "\n\n";

    $host = "localhost";
    $username = "info@assoonasseen.co.uk";
    $password = "lauramuner";

    $headers = sprintf("From: %s\r\nReply-To: %s", $to, $to);
    $sent = mail($to, $subject, $content, $headers);
 
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <title>AsSoonAsSeen</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="/css/default.css" />
    <script defer type='text/javascript' src='/js/index.js'></script>

    <!--favicons-->
    <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="/images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
  
  </head>
  <body>
    <section class="assoonasseen" data-success="<?php echo $sent ? 1 : 0; ?>"></section>
  </body>
</html>