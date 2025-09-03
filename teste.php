<?php
    require_once __DIR__ ."/controllers/AuthController.php";
    require_once __DIR__ ."/controllers/Password.php";
    require_once __DIR__. "/helpers/token_jwt.php";

    $data = [
        "email"=>"pamellapereto@gmail.com",
        "senha"=>"1234"
    ];

    AuthController::login($conn,$data);
    //echo Password::generateHash($data['password']);
//
    //$hash = '$2y$10$pa1c.sE65/hXgcfDKUIbLOBkpK56o8QG2zEJZIDyv2bhZKUd0sTEO';
//
    //echo "<br>";
    // 
    //echo Password::validateHash($data['password'],$hash);

    ?>