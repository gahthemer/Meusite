<?php
    require_once __DIR__ . "/../models/AdicionalModel.php";

    class AdicionaisController{

        public static function create($conn,$data){
            $resultado = AdicionalModel :: create($conn,$data);
            if($resultado){
              return jsonResponse(['message' => "Adicional criado com sucesso"]);
            }else{
               return jsonResponse(['message' => "Adicional nao criado"], 404);
            }
        }

        public static function getAll($conn){
            $listaQuarto = AdicionalModel::getAll($conn);
            return jsonResponse($listaQuarto);
        }

        public static function getById($conn,$id){
            $IdQuarto = AdicionalModel::getById($conn,$id);
            return jsonResponse($IdQuarto);
        }

         public static function delete($conn,$id){
            $deletado = AdicionalModel :: delete($conn,$id);
            if($deletado){
              return jsonResponse(['message' => "Deletado com Sucesso"]);
            }else{
               return jsonResponse(['message' => "Erro ao Deletar"], 404);
            }
        }

        public static function update($conn,$id,$data){
            $Atualizado = AdicionalModel :: update($conn,$id,$data);
            if($Atualizado){
              return jsonResponse(['message' => "Adicional atualizado com sucesso"]);
            }else{
               return jsonResponse(['message' => "Adicional nao atualizado"], 404);
            }
        }


    }
?>
