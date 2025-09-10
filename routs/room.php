<?php

require_once __DIR__ . "/../controllers/QuartoController.php";

if ( $_SERVER['REQUEST_METHOD'] === "GET" ){
    $id = $segments[2] ?? null;

    if(isset($id)){
        QuartoController::getById($conn,$id);
    }
    else{
        QuartoController::getAll($conn);
    }
}

if ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
    $id = $segments[2] ?? null;

    if(isset($id)){
        QuartoController::delete($conn,$id);
    }
    else{
        jsonResponse(['message'=>"id do quarto obrigatorio"],403);
    }


} 


else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Método não permitido'
    ], 405);
}


?>