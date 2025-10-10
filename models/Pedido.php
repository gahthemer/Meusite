<?php 
    require_once "models/QuartoModel.php";
    require_once "models/ReservasModel.php";
    class PedidoModel{

        

        public static function create($conn,$data){
            
            $sql = "INSERT INTO pedidos (usuario_id,cliente_id,data,pagamento) VALUES (?, ?, ?, ?)";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("iiss", 
            $data ["usuario_id"],
            $data ["cliente_id"],
            $data ["data"],
            $data ["pagamento"]
        
        ); 
            $resultado = $stmt->execute();
                if($resultado){
                return $conn->insert_id;
            }
            return false;
        }

        public static function getAll($conn){

            $sql = "SELECT * FROM pedidos";
            $resultado = $conn->query($sql);
            return $resultado->fetch_all(MYSQLI_ASSOC);

    }

        public static function getById($conn,$id){

            $sql = "SELECT * FROM pedidos WHERE id = ?";
            $stmt = $conn -> prepare ($sql);
            $stmt -> bind_param("i",$id);
            $stmt -> execute();
            return $stmt->get_result()->fetch_assoc();

    }

        public static function delete($conn,$id){

            $sql = "DELETE FROM pedidos WHERE id = ?";
            $stmt = $conn -> prepare ($sql);
            $stmt -> bind_param("i",$id);
            return $stmt -> execute();

    }

    public static function update($conn,$id,$data){

         $sql = "UPDATE pedidos SET usuario_id = ?, cliente_id = ?, data = ?,pagamento = ? WHERE id = ?" ;

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("iissi", 
            $data ["usuario_id"],
            $data ["cliente_id"],
            $data ["data"],
            $data ["pagamento"],
            $id
        
        ); 
            return $stmt->execute();
    }  
    
    public static function createpedido ($conn,$data){
        $cliente_id = $data ["cliente_id"];
        $pagamento = $data ["pagamento"];
        $usuario_id = $data ["usuario_id"];
        $reservas = [];
        $reservou = false;

        $conn->begin_transaction(MYSQLI_TRANS_START_READ_WRITE);

        try {
            $pedido_id = self:: create($conn,[
                "usuario_id" => $usuario_id,
                "cliente_id" => $cliente_id,
                "pagamento" => $pagamento
            ]);

            if(!$pedido_id){
                throw new RuntimeException("Erro ao criar o pedido.");
            }

             foreach($data['quartos'] as $quartos){
                $id = $quartos["id"];
                $inicio = $quartos["inicio"];
                $fim = $quartos["fim"];

                if(!QuartoModel::lockById($conn,$id)){
                    $reservas[] = "Quartos{$id} indisponivel!";
                    continue;
                }

                //ReserveModel :: isConflict();
                $reservasResult = ReservaModel :: create($conn,[
                    "pedido_id" => $pedido_id,
                    "quarto_id" =>$id,
                    "adicional_id" => null,
                    "inicio" => $inicio,
                    "fim" => $fim,
                ]);

                $reservou = true;
                $reservas[] = [
                    "reserva_id" => $conn->insert_id,
                    "quarto_id" => $id
                ];

            }

           if ( $reservou == true ) {
                $conn->commit();
                return [
                    "pedido_id" => $pedido_id,
                    "reservas" => $reservas,
                    "message" => "Reservas criadas com sucesso!"
                ];
            } else {
                throw new RuntimeException("Pedido não realizado, nenhum quarto reservado.");
            }

    
        } catch (\Throwable $th) {
          try {
            $conn->rollback();
          } catch (\Throwable $th2) {
          }  
          throw $th;
        }
    }

}
?>