<?php
    require_once __DIR__ ."/controllers/AuthController.php";
    require_once __DIR__ ."/controllers/Password.php";
    require_once __DIR__ ."/helpers/token_jwt.php";
    require_once __DIR__ ."/controllers/QuartoController.php";
    require_once __DIR__ ."/controllers/ClienteController.php";
    require_once __DIR__ ."/controllers/AdicionaisController.php";
    require_once __DIR__ . "/controllers/ReservasController.php";
    require_once __DIR__ . "/controllers/PedidoController.php";

        // $data = [
           // "nome"=>"Quarterao",
          //  "numero"=> 10,
           // "qnt_casal"=> 2,
          //  "qnt_solteiro"=> 2,
            //"preco"=> 500,
           // "disponivel"=> 10
        //];

        //$data = [
            
            //"nome" => "Gabriel",
            //"email" => "GabrielThemer@gmail.com",
           //"telefone" => "333333333",
            //"cpf" => "5333333333'",
            //"senha" => "0987654321",
            //"cargo_id" => 0
        //];

        //$data = [
           //"nome"=>"flores",
           //"preco"=> 100
        //];
    

       // $data = [
            
           // "pedido_id" => 4,
           // "quarto_id" => 34,
          // "adicional_id" => 7,
          //  "fim" => "20/09/25",
           // "inicio" => "01/09/25"
            
        //];

            //$data = [
            
           // "usuario_id" => 5,
           // "cliente_id" => 35,
            //"data" => date("y-m-d H:i:s"),
           // "pagamento" => "pix"
           // ];

    //PedidosController :: create($conn,$data);
    //PedidosController :: getall($conn);
    //PedidosController :: getById($conn,4);
    //PedidosController :: delete($conn,5);
    //PedidosController :: update($conn,4,$data);  



    //ReservasController :: create($conn,$data);
    //ReservasController :: getall($conn);
    //ReservasController :: getById($conn,1);
    //ReservasController :: delete($conn,1);
    //ReservasController :: update($conn,2,$data);

     //AdicionaisController :: create($conn,$data);
     //AdicionaisController :: getall($conn);
     //AdicionaisController :: getById($conn,47);
     //AdicionaisController :: delete($conn,5);
     //AdicionaisController :: update($conn,7,$data);
 
 
    //ClienteController :: create($conn,$data);
    //ClienteController :: getAll($conn);
    //ClienteController :: getById($conn,21);
    //ClienteController :: delete($conn,37);
    //ClienteController :: update($conn,39,$data);
   
 
 
    //QuartoController :: post($conn,$data);
    //QuartoController :: update ($conn,31,$data);
    //QuartoController :: delete ($conn,21);
    //QuartoController :: getById ($conn,21);
    //QuartoController :: getAll ($conn);
    //QuartoController :: create($conn,$data);
 
    //AuthController :: login($conn,$data);
 
    //$tokeninvalido = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
    //$tokenvalido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNZXVzaXRlIiwiaWF0IjoxNzU2OTMwNDE1LCJleHAiOjE3NTY5MzQwMTUsInN1YiI6eyJpZCI6NSwibm9tZSI6IlBhbWVsbGEiLCJlbWFpbCI6InBhbWVsbGFwZXJldG9AZ21haWwuY29tIiwiY2FyZ28iOiJjYW1hcmVpcmEifX0.tPiz6TM3C690nlJf9iaqrmKL-92yFJQVvFK_lgtQp1k";
 
    //echo validateToken ($token);
    //echo var_dump(validateToken($tokenvalido));
    //echo Password::generateHash($data['password']);
 
    //$hash = '$2y$10$pa1c.sE65/hXgcfDKUIbLOBkpK56o8QG2zEJZIDyv2bhZKUd0sTEO';
 
    //echo "<br>";
    //
    //echo Password::validateHash($data['password'],$hash);

    ?>