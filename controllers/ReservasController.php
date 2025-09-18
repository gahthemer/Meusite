<?php
require_once __DIR__ . "/../models/ReservasModel.php";

    class ReservasController{

        public static function create($conn,$data){
                
            $resultado = ReservasModel :: create($conn,$data);
            if($resultado){
            return jsonResponse(['message' => "Reserva cadartrado com sucesso"]);
            }else{
            return jsonResponse(['message' => "Reserva nao cadastrado"], 404);
        }
        }

        public static function getAll($conn){
            $listaQuarto = ReservasModel::getAll($conn);
            return jsonResponse($listaQuarto);
        }

        public static function getById($conn,$id){
            $IdCliente = ReservasModel::getById($conn,$id);
            return jsonResponse($IdCliente);
        }

         public static function delete($conn,$id){
            $deletado = ReservasModel :: delete($conn,$id);
            if($deletado){
              return jsonResponse(['message' => "Deletado com Sucesso"]);
            }else{
               return jsonResponse(['message' => "Erro ao Deletar"], 404);
            }
        }

        public static function update($conn,$id,$data){
            $Atualizado = ReservasModel :: update($conn,$id,$data);
            if($Atualizado){
              return jsonResponse(['message' => "Reserva atualizado com sucesso"]);
            }else{
               return jsonResponse(['message' => "Reserva nao atualizado"], 404);
            }
        }


    }
    



?>