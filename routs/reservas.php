<?php

require_once __DIR__ . "/../controllers/ReservasController.php";

    if ( $_SERVER['REQUEST_METHOD'] === "GET" ){
        $id = $segments[2] ?? null;

        if(isset($id)){
            ReservasController::getById($conn,$id);
        }
        else{
            ReservasController::getAll($conn);
        }
    }

    elseif ($_SERVER['REQUEST_METHOD'] === "POST" ){
        $data = json_decode( file_get_contents('php://input'), true );
        ReservasController::create($conn,$data);
    }

    elseif ($_SERVER['REQUEST_METHOD'] === "PUT" ){
        $data = json_decode( file_get_contents('php://input'), true );
        $id = $data ['id'];
        ReservasController::update($conn,$id,$data);
    }


    elseif ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
        $id = $segments[2] ?? null;

        if(isset($id)){
            ReservasController::delete($conn,$id);
        }
        else{
            jsonResponse(['message'=>"id da reserva obrigatorio"],403);
        }

    } 

    else {
        jsonResponse([
            'status' => 'erro',
            'message' => 'Método não permitido'
        ], 405);
    }


?>