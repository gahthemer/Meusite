<?php
    require_once __DIR__ . "/../models/QuartoModel.php";

    class QuartoController{

        public static function create($conn,$data){

            if(!isset($data['disponivel'])){
                return jsonResponse(['message'=>"Erro no campo"]);
            }

            $resultado = QuartoModel :: create($conn,$data);
            if($resultado){
              return jsonResponse(['message' => "Quarto reservado com sucesso"]);
            }else{
               return jsonResponse(['message' => "Quarto nao reservado"], 404);
            }
        }

        public static function getAll($conn){
            $listaQuarto = QuartoModel::getAll($conn);
            return jsonResponse($listaQuarto);
        }

        public static function getById($conn,$id){
            $IdQuarto = QuartoModel::getById($conn,$id);
            return jsonResponse($IdQuarto);
        }

         public static function delete($conn,$id){
            $deletado = QuartoModel :: delete($conn,$id);
            if($deletado){
              return jsonResponse(['message' => "Deletado com Sucesso"]);
            }else{
               return jsonResponse(['message' => "Erro ao Deletar"], 404);
            }
        }

        public static function update($conn,$id,$data){
            $Atualizado = QuartoModel :: update($conn,$id,$data);
            if($Atualizado){
              return jsonResponse(['message' => "Quarto atualizado com sucesso"]);
            }else{
               return jsonResponse(['message' => "Quarto nao atualizado"], 404);
            }
        }


    public static function disponivel($conn, $data) {
     $resultado = QuartoModel ::disponivel($conn, $data);
        if($resultado){
            return jsonResponse(['Quartos'=> $resultado]);
        }else{
            return jsonResponse(['message'=> 'nao disponivel'], 400);
        }
    }
}

?>
