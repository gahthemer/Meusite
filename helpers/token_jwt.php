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
        return jwt :: encode($payload,SECRET_KEY,"HS256");
    }

    function validateToken($token){
        try{
            $key = new Key(SECRET_KEY,"HS256");
            $decode = jwt :: decode ($token , $key);
            return $decode -> sub;
            
        }catch(Exception $error){
            return false;
        }
    }

    function validationTokenAPI(){
        $headers = getallheaders();
        if (!isset($headers["Authorization"])){
            jsonResponse(['message'=>"Token ausente"],401);
           exit;
        }

        $token = str_replace("Bearer ", "",$headers["Authorization"]);
        if(!validateToken($token)){
         jsonResponse(['message'=>"Token invalido"],401);
           exit;   
    }
}



?>