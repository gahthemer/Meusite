<?php
    require_once __DIR__ ."/controllers/AuthController.php";
    require_once __DIR__ ."/controllers/Password.php";
    require_once __DIR__. "/helpers/token_jwt.php";

    $data = [
        "email"=>"pamellapereto@gmail.com",
        "senha"=>"1234"
    ];

    //AuthController::login($conn,$data);

    $tokeninvalido = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
    $tokenvalido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNZXVzaXRlIiwiaWF0IjoxNzU2OTMwNDE1LCJleHAiOjE3NTY5MzQwMTUsInN1YiI6eyJpZCI6NSwibm9tZSI6IlBhbWVsbGEiLCJlbWFpbCI6InBhbWVsbGFwZXJldG9AZ21haWwuY29tIiwiY2FyZ28iOiJjYW1hcmVpcmEifX0.tPiz6TM3C690nlJf9iaqrmKL-92yFJQVvFK_lgtQp1k";
   //echo validateToken ($token);
   echo var_dump(validateToken($tokenvalido));
    //echo Password::generateHash($data['password']);
//
    //$hash = '$2y$10$pa1c.sE65/hXgcfDKUIbLOBkpK56o8QG2zEJZIDyv2bhZKUd0sTEO';
//
    //echo "<br>";
    // 
    //echo Password::validateHash($data['password'],$hash);

    ?>