<?php
    require_once __DIR__ . "/../models/QuartoModel.php";
    require_once "uploadController.php";
    require_once __DIR__ ."/../models/FotoModel.php";
    require_once "ValidateController.php";

    class QuartoController{

        public static function create($conn,$data){


            ValidateController::validate_data($data, ["nome", "numero", "qnt_casal", "qnt_solteiro", "preco", "disponivel"]);

            $result = QuartoController::create($conn, $data);
            if ($result){
            if ($data['fotos']){
                $pictures = UploadController::upload($data['fotos']);
                foreach($pictures['saves'] as $name){
                    $idPhoto = fotoModel::create($conn, $name['name']);
                    if ($idPhoto){
                        fotoModel::createRelationRoom($conn, $result, $idPhoto);
                    }
                }
            }
            return jsonResponse(['message'=>"Quarto criado com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao criar o quarto"], 400);
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
        $resultado = QuartoModel::disponivel($conn, $data);
        if($resultado){
            return jsonResponse(['Quartos'=> $resultado]);
        }else{
            return jsonResponse(['message'=> 'nao disponivel'], 400);
        }
    }
}

?>
