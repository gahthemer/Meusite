<?php 

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
            return $stmt->execute();
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
    

    


}
?>