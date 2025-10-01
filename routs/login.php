<?php

require_once __DIR__ . "/../controllers/AuthController.php";


if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $opcao = $segments[2] ?? null;
    $data = json_decode(file_get_contents("php://input"), true);
    
    if ($opcao === "client") {
        AuthController::loginClient($conn, $data);
    }
    else if ($opcao === "emoloyee") {
        AuthController::login($conn, $data);
    }else{
        jsonResponse(["status"=>"erro","message","rota nao existente"],303);
    }

}else{
    jsonResponse(["status"=>"erro","message"=>"metodo nao permitido"],303);
}

?>