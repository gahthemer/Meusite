

<?php

require_once __DIR__ . "/../controllers/PedidoController.php";


if ( $_SERVER['REQUEST_METHOD'] === "POST" ){
    $user = validationTokenAPI("cliente");

    $opcao = $segments[2] ?? null;
    $data = json_decode( file_get_contents('php://input'), true );
    $data['cliente_id'] = $user['id'];
   
    if($opcao == "reservas"){
        PedidosController::create2( $conn, $data );
    }
    else{
        PedidosController::create( $conn, $data );
    }
   
}
else{
    jsonResponse(['status'=>'erro','message'=>'Metodo nao permitido'],304);
}
?>