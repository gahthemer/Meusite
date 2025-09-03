<?php
require_once __DIR__ . "/../models/UserModel.php";
require_once "Password.php";
require_once __DIR__ . "/../helpers/token_jwt.php";

class AuthController {
    public static function login($conn, $data){
        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);

        // Confirma se tem algum campo vazio
        if (empty($data['email']) || empty($data['senha'])){
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Preencha todos os campos!"
            ], 401);
        }

        $user = UserModel::validateUser($conn, $data['email'], $data['senha']);
        if ($user){
            $token = createToken($user);
            return jsonResponse([
                "token" => $token
            ]);
        }else{
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Credenciais inválidas!"
            ], 401);
        }

    }
}
?>