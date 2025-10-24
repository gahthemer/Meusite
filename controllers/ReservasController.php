<?php
    require_once __DIR__ ."/../models/ReservasModel.php";
    require_once "ValidateController.php";

    class ReservasController{
        public static function create($conn, $data){
            ValidateController::validate_data($data, ["pedido_id", "quarto_id", "adicional_id", "inicio", "fim"]);

            $data["inicio"] = ValidateController::fix_dateHour($data['inicio'], 14);
            $data["fim"] = ValidateController::fix_dateHour($data['fim'], 12);

            $result = ReservaModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Reserva criada com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function getById($conn, $id) {
            $result = ReservaModel::getById($conn, $id);
            return jsonResponse($result);
        }
        
        public static function searchByRequest($conn, $pedido_id) {
        $result = ReservaModel::searchByRequest($conn, $pedido_id);
        return jsonResponse($result);
    }  
}
    
?>