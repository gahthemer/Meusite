<?php
require_once __DIR__ . "/../controllers/AutController.php";

if ( $_SERVER['REQUEST_METHOD'] == "POST" ){
    $data = json_decode( file_get_contents('php://input'), true );
    AutController::login($conn, $data);
} else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Método não permitido'
    ], 405);
}
?>