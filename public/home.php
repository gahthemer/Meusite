<?php 
    require_once "../config/database.php";
    require_once "../controllers/AutController.php";
    $title = "Home";

    $data = [
        "email" => "osanaam@gmail.com",
        "senha" => "121274"
    ];

    AutController::login($conn, $data);


?>
    <h1>HOME</h1>

<?php 
    require_once 'utils/rodape.php'; 
?>