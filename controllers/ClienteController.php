<?php
require_once __DIR__ . "/../models/clientemodel.php";
require_once "Password.php";

    class ClienteController{

        public static function create($conn,$data){

            $data['password'] = Password::generateHash($data['password']);
                
            $resultado = Clientemodel :: create($conn,$data);
            if($resultado){
                return jsonResponse(['message' => "Cliente cadartrado com sucesso"]);
            }else{
                return jsonResponse(['message' => "Cliente nao cadastrado"], 404);
            }
        }

        public static function getAll($conn){
            $listaQuarto = clientemodel::getAll($conn);
            return jsonResponse($listaQuarto);
        }

        public static function getById($conn,$id){
            $IdCliente = clientemodel::getById($conn,$id);
            return jsonResponse($IdCliente);
        }

         public static function delete($conn,$id){
            $deletado = clientemodel :: delete($conn,$id);
            if($deletado){
              return jsonResponse(['message' => "Deletado com Sucesso"]);
            }else{
               return jsonResponse(['message' => "Erro ao Deletar"], 404);
            }
        }

        public static function update($conn,$id,$data){
            $data['password'] = Password::generateHash($data['password']);
            $Atualizado = clientemodel :: update($conn,$id,$data);
            if($Atualizado){
              return jsonResponse(['message' => "Cliente atualizado com sucesso"]);
            }else{
               return jsonResponse(['message' => "Cliente nao atualizado"], 404);
            }
        }
        public static function loginClient($conn, $data) {

        $data['email'] = trim($data['email']);
        $data['password'] = trim($data['password']);
 
        if (empty($data['email']) || empty($data['password'])) {
            return jsonResponse([
                "status" => "erro",
                "message" => "Preencha todos os campos!"
            ], 401);
        }
 
        $cliente = clienteModel::ClienteValidation($conn, $data['email'], $data['password']);
        if ($cliente) {
            $token = createToken($cliente);
            return jsonResponse([ "token" => $token ]);
        } else {
            return jsonResponse([
                "status" => "erro",
                "message" => "Credenciais inválidas!"
            ], 401);
        }

    }
}



?>