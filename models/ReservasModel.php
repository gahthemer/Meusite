<?php
class ReservaModel{
 
    public static function create($conn, $data) {
        
 
        $sql = "INSERT INTO reservas (pedido_id, quarto_id, adicional_id, fim, inicio) VALUES (?, ?, ?, ?, ?)";
 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iiiss",
            $data['pedido_id'],
            $data['quarto_id'],
            $data['adicional_id'],
            $data['fim'], 
            $data['inicio']
        );
 
        return $stmt->execute();
    }
 
 
    public static function getAll($conn){
 
            $sql = "SELECT * FROM reservas";
            $resultado = $conn->query($sql);
            return $resultado->fetch_all(MYSQLI_ASSOC);
        }
 
    public static function getById($conn,$id){
 
        $sql = "SELECT * FROM reservas WHERE id = ?";
        $stmt = $conn -> prepare ($sql);
        $stmt -> bind_param("i",$id);
        $stmt -> execute();

        return $stmt->get_result()->fetch_assoc();
    }
 
    public static function delete($conn,$id){
 
        $sql = "DELETE FROM reservas WHERE id = ?";
        $stmt = $conn -> prepare ($sql);
        $stmt -> bind_param("i",$id);
        return $stmt -> execute();
    }
 
    public static function update($conn,$id,$data){
 
        $sql = "UPDATE reservas SET pedido_id = ?, quarto_id = ?, adicional_id = ?,fim = ?,inicio = ? WHERE id = ?" ;
 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iiissi",
            $data ["pedido_id"],
            $data ["quarto_id"],
            $data ["adicional_id"],
            $data ["fim"],
            $data ["inicio"],
            $id
        );
        return $stmt->execute();
    }
}
       
?>