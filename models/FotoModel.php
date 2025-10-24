<?php 

    class FotoModel{

         public static function create($conn, $name){
        $sql = "INSERT INTO fotos (nome) VALUES (?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $name);
        if ($stmt->execute()){
            return $conn->insert_id;
        }
        return false;
    }
       public static function createRelationRoom($conn, $idRoom, $idPhoto){
        $sql = "INSERT INTO quartos_fotos (quarto_id, foto_id) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $idRoom, $idPhoto);
        if ($stmt->execute()){
            return $conn->insert_id;
        }
        return false;
    }


        public static function getAll($conn){
        $sql = "SELECT * FROM fotos";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

        public static function getByRoomId($conn, $id){
        $sql = "SELECT f.nome
        FROM imagens img
        JOIN fotos f ON img.foto_id = f.id
        WHERE img.quarto_id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $fotos = [];
        while ( $row = $result->fetch_assoc()){
            $fotos[] = $row['nome'];
        }
        return $fotos;
    }

       public static function delete($conn, $id){
        $sql = "DELETE FROM fotos WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

     public static function update($conn, $id, $name){
        $sql = "UPDATE fotos SET nome=? WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $name, $id);
        return $stmt->execute();
    }
    

    


}
?>