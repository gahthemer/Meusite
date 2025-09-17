<?php 
class Clientemodel{
    public static function create($conn,$data){
         $sql = "INSERT INTO clientes (nome, email, telefone,cpf,senha,cargo_id) VALUES (?, ?, ?, ?, ?,?)";

          $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssssi", 
            $data ["nome"],
            $data ["email"],
            $data ["telefone"],
            $data ["cpf"],
            $data ["senha"],
            $data ["cargo_id"]
    );
        return $stmt->execute();
    }

    public static function validacliente($conn, $email, $password){
        //$sql = "SELECT * FROM usuarios WHERE email = ?";
        $sql = "SELECT
                cliente.id,
                cliente.nome,
                cliente.email,
                clientes.senha,
                cargo.nome AS cargo 
                FROM clientes
                INNER JOIN cargos
                ON cargos.id = cliente.cargo_id
                WHERE cliente.email = ?
                ;";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if($user = $result->fetch_assoc()){

        if (PASSWORD::validatehash($password,$usercliente['senha'])){
                unset($usercliente['senha']);
                return $usercliente;
            }
        }
        return false;
    }

    public static function getAll($conn){

            $sql = "SELECT * FROM clientes";
            $resultado = $conn->query($sql);
            return $resultado->fetch_all(MYSQLI_ASSOC);
}

    public static function getById($conn,$id){

        $sql = "SELECT * FROM clientes WHERE id = ?";
        $stmt = $conn -> prepare ($sql);
        $stmt -> bind_param("i",$id);
        $stmt -> execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function delete($conn,$id){

            $sql = "DELETE FROM quartos WHERE id = ?";
            $stmt = $conn -> prepare ($sql);
            $stmt -> bind_param("i",$id);
            return $stmt -> execute();
    }

    public static function update($conn,$id,$data){

         $sql = "UPDATE clientes SET nome = ?, email = ?, telefone = ?,cpf = ?,senha = ?,cargo_id = ? WHERE id = ?" ;

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssss", 
            $data ["nome"],
            $data ["email"],
            $data ["telefone"],
            $data ["cpf"],
            $data ["senha"],
            $data ["cargo_id"],
            $id
        
        ); 
            return $stmt->execute();
    }
}
        
?>