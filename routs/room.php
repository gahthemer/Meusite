<?php

require_once __DIR__ . "/../controllers/QuartoController.php";

    if ( $_SERVER['REQUEST_METHOD'] === "GET" ){
        $id = $segments[2] ?? null;

        if (isset($id)){
            if (is_numeric($id)){
            QuartoController::getById($conn, $id);
        }else{
            $inicio = isset($_GET['inicio']) ? $_GET['inicio'] : null;
            $fim = isset($_GET['fim']) ? $_GET['fim'] : null;
            $qnt = isset($_GET['qnt']) ? $_GET['qnt'] : null;
            QuartoController::disponivel($conn, ["inicio"=>$inicio, "fim"=>$fim, "qnt"=>$qnt]);
        }
    }else{
        QuartoController::getAll($conn);
    }
    }

    elseif ($_SERVER['REQUEST_METHOD'] === "POST" ){
        $data = json_decode( file_get_contents('php://input'), true );
        QuartoController::create($conn,$data);
    }

    elseif ($_SERVER['REQUEST_METHOD'] === "PUT" ){
        $data = json_decode( file_get_contents('php://input'), true );
        $id = $data ['id'];
        QuartoController::update($conn,$id,$data);
    }


    elseif ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
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