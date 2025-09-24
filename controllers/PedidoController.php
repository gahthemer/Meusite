<?php
    require_once __DIR__ . "/../models/Pedido.php";

    class PedidosController{

        public static function create($conn,$data){
            $resultado = PedidoModel :: create($conn,$data);
            if($resultado){
              return jsonResponse(['message' => "Pedido criado com sucesso"]);
            }else{
               return jsonResponse(['message' => "Não foi feito o pedido"], 404);
            }
        }

        public static function getAll($conn){
            $listaQuarto = PedidoModel::getAll($conn);
            return jsonResponse($listaQuarto);
        }

        public static function getById($conn,$id){
            $IdQuarto = PedidoModel::getById($conn,$id);
            return jsonResponse($IdQuarto);
        }

         public static function delete($conn,$id){
            $deletado = PedidoModel :: delete($conn,$id);
            if($deletado){
              return jsonResponse(['message' => "Deletado com Sucesso"]);
            }else{
               return jsonResponse(['message' => "Erro ao Deletar"], 404);
            }
        }

        public static function update($conn,$id,$data){
            $Atualizado = PedidoModel :: update($conn,$id,$data);
            if($Atualizado){
              return jsonResponse(['message' => "Pedido atualizado com sucesso"]);
            }else{
               return jsonResponse(['message' => "Pedido nao atualizado"], 404);
            }
        }


    }
?>
