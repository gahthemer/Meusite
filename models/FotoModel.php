<?php 

    class FotoModel{

        public static function create($conn,$name){
            
            $sql = "INSERT INTO fotos (nome) VALUES (?)";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $name,);
        }
        public static function createRelationRoom($conn,$idRoom,$idPhoto){
            
            $sql = "INSERT INTO imagens_quartos (quarto_id,foto_id) VALUES (?,?)";
            
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ii", $idRoom,$idPhoto);
        }


        public static function getAll($conn){

            $sql = "SELECT * FROM fotos";
            $resultado = $conn->query($sql);
            return $resultado->fetch_all(MYSQLI_ASSOC);

    }

        public static function getByRoomId($conn,$id){

            $sql = "SELECT * FROM imagens_quartos JOIN fotos ON qf.foto_id =f.id WHERE qf.quartos_id = ?";
            $stmt = $conn -> prepare ($sql);
            $stmt -> bind_param("i",$id);
            $result = $stmt -> execute();
            $photos = [];
            while($row = $result->fetch_assoc()){
                $photos[] =$row['nome'];
            }
            return $photos;

    }

        public static function delete($conn,$id){

            $sql = "DELETE FROM fotos WHERE id = ?";
            $stmt = $conn -> prepare ($sql);
            $stmt -> bind_param("i",$id);
            return $stmt -> execute();

    }

    public static function update($conn,$id,$data){

         $sql = "UPDATE fotos SET nome = ? WHERE id = ?" ;

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("si", 
            $data ["nome"],
            $id
        
        ); 
            return $stmt->execute();
    }
    

    


}
?>