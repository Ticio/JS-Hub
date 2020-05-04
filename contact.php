<?php
    
    session_start();

?>

<!DOCTYPE html>

<html lang="en">
    <head>
        <title>J - Script Hub</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Coursework 2">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="stylesheet" type="text/css" href="css/contact.css">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    </head>

    <body >
        <div class="main-container">

            <!-- Header -->
            <header>
                <nav>
                    <!-- Logo -->
                    <div class="logo_container">
                        <div class="logo" >
                            <img src="images/logo.png" alt="">
                            <span>JS-Hub</span>
                        </div>
                    </div>

                    <div class="main_nav">
                        <ul class="main_nav_items">
                            <li class="main_nav_item"><a href="index.html">Home</a></li>
                            <li class="main_nav_item"><a href="courses.html">Courses</a></li>
                            <li class="main_nav_item"><a href="library.html">Library</a></li>
                            <li class="main_nav_item"><a href="contact.php">contact</a></li>
                        </ul>
                    </div>

                </nav>
            </header>

            <div id="form-section" class="container">

                <div class="row form-container">
                    
                <?php 
                    
                    if ( isset($_SESSION['message'])) 
                    {   
                        echo '<h4 class="text-center title"><b>'.$_SESSION['message'].'</b></h4>';  
                    }
                    else
                    {   
                        echo '<h4 class="text-center title"><b>Contact Module Leader</b></h4>';      
                ?>

                            <form  id="contactForm" action="message.php" method="post">
                                
                                <div class="form-group">
                                  <label for="email">Name:</label>
                                  <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" required>
                                </div>

                                <div class="form-group">
                                  <label for="email">Email:</label>
                                  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
                                </div>
                                

                                <div class="form-group">
                                  <label for="email">Message:</label>
                                    <textarea name="message" id="message" class="field-long form-control message" required></textarea>
                                </div>

                                <button type="submit" class="btn btn-default">Submit</button>

                            </form>

                    <?php }?>
                    
                </div>
            </div>
        
            <script src="jquery.min.js"></script>
            <script src="js/bootstrap.min.js"></script>

        </div>
    </body>
</html>