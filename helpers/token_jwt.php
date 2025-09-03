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
        return jwt :: encode($payload,SECRET_KEY,"SH256");
    }

    function validateToken($token){
        try{
            $key = new Key(SECRET_KEY,"SH256");
            $decode = jwt :: decode ($token , $key);
            return $decode -> sub;
            
        }catch(Exception $error){
            return false;
        }
    }



?>