<?php
require_once __DIR__ . "/../models/clientemodel.php";

    class ClienteController{

        public static function create($conn,$data){
                $resultado = Clientemodel :: create($conn,$data);
                if($resultado){
                return jsonResponse(['message' => "Cliente cadartrado com sucesso"]);
                }else{
                return jsonResponse(['message' => "Cliente nao cadastrado"], 404);
                }
            }

            public static function getAll($conn){
                $listaCliente = clientesmodel::getAll($conn);
                return jsonResponse($listaCliente);
            }

            public static function getById($conn,$id){
                $IdCliente = clientesmodel::getById($conn,$id);
                return jsonResponse($IdCliente);
            }

            public static function delete($conn,$id){
                $deletado = clientesmodel :: delete($conn,$id);
                if($deletado){
                return jsonResponse(['message' => "Deletado com Sucesso"]);
                }else{
                return jsonResponse(['message' => "Erro ao Deletar"], 404);
                }
            }

            public static function update($conn,$id,$data){
                $Atualizado = clientesmodel :: update($conn,$id,$data);
                if($Atualizado){
                return jsonResponse(['message' => "Quarto atualizado com sucesso"]);
                }else{
                return jsonResponse(['message' => "Quarto nao atualizado"], 404);
                }
            }

}


?>