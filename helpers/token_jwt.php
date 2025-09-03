<?php
    require_once __DIR__ . "/jwt/jwt_include.php";

    use Firebase\jwt\jwt;
    use Firebase\jwt\Key;

    function createToken($user){
        $payload = [
            "iss" => "Meusite",
            "iat" => time(),
            "exp" => time() + (60 * (60 * 1)),
            "sub" => $user
        ];
        return jwt :: encode($payload,SECRET_KEY);
    }



?>