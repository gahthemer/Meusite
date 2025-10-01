

<?php

require_once __DIR__ . "/../controllers/Password.php";

class Clientemodel{
 
    public static function create($conn, $data) {
 
        $sql = "INSERT INTO clientes (nome, email, telefone, cpf, senha) VALUES (?, ?, ?, ?, ?)";
 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss",
            $data['nome'],
            $data['email'],
            $data['telefone'],
            $data['cpf'],
            $data['senha']
        );
 
        return $stmt->execute();
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
 
        $sql = "DELETE FROM clientes WHERE id = ?";
        $stmt = $conn -> prepare ($sql);
        $stmt -> bind_param("i",$id);
        return $stmt -> execute();
    }
 
    public static function update($conn,$id,$data){
 
        $sql = "UPDATE clientes SET nome = ?, email = ?, telefone = ?,cpf = ?,senha = ?,cargo_id = ? WHERE id = ?" ;
 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssii",
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
     public static function ClienteValidation($conn, $email, $senha) {
           $sql = "SELECT
                clientes.id,
                clientes.email,
                clientes.senha,
                clientes.nome,
                cargos.nome AS cargo
                FROM clientes
                INNER JOIN cargos
                ON cargos.id = clientes.cargo_id
                WHERE clientes.email = ?
            ;";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
 
        if($client = $result->fetch_assoc()) {
            if(Password::validateHash($senha, $client['senha'])) {
                unset($client['senha']);
                return $client;  
            }

        return false;
        }
    }
}
       
?>