<?php
class Clientemodel{
 
    public static function create($conn, $data) {
        
        $hashedPassword = password_hash($data['senha'], PASSWORD_BCRYPT);
 
        $sql = "INSERT INTO clientes (nome, email, telefone, cpf, senha, cargo_id) VALUES (?, ?, ?, ?, ?, ?)";
 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssi",
            $data['nome'],
            $data['email'],
            $data['telefone'],
            $data['cpf'],
            $hashedPassword, 
            $data['cargo_id']
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
            $hashedPassword,
            $data ["cargo_id"],
            $id
        );
        return $stmt->execute();
    }
}
       
?>