<?php

require_once __DIR__ . "/../controllers/ClienteController.php";

    if ( $_SERVER['REQUEST_METHOD'] === "GET" ){
        $id = $segments[2] ?? null;

        if(isset($id)){
            ClienteController::getById($conn,$id);
        }
        else{
            ClienteController::getAll($conn);
        }
    }

    elseif ($_SERVER['REQUEST_METHOD'] === "POST" ){
        $data = json_decode( file_get_contents('php://input'), true );
        ClienteController::create($conn,$data);
    }

    elseif ($_SERVER['REQUEST_METHOD'] === "PUT" ){
        $data = json_decode( file_get_contents('php://input'), true );
        $id = $data ['id'];
        ClienteController::update($conn,$id,$data);
    }


    elseif ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
        $id = $segments[2] ?? null;

        if(isset($id)){
            ClienteController::delete($conn,$id);
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