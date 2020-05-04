<?php
    
    session_start();

    $name=$_POST['name'];
    $email=$_POST['email']; 
    $message=$_POST['message'];

 
    $_SESSION['message'] = '<h4>Hi '.$_POST['name'] .'. Thanks for your message.</br>'
    .'the module leader will contact you within three working days.</h4>';

    header('Location: contact.php');
?>
