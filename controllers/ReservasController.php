<?php
require_once __DIR__ . "/../models/ReservasModel.php";

    
    class ReservasController {

        public static function create($conn, $data) {
            $resultado = ReservaModel::create($conn, $data);
        if ($resultado) {
            return jsonResponse(['message' => "Reserva cadastrada com sucesso"]);
        }else{
            return jsonResponse(['message' => "Reserva não cadastrada"], 404);
        }
    }

        public static function getAll($conn) {
            $listaQuarto = ReservaModel::getAll($conn);
            return jsonResponse($listaQuarto);
    }

        public static function getById($conn, $id) {
            $IdCliente = ReservaModel::getById($conn, $id);
            return jsonResponse($IdCliente);
    }

        public static function delete($conn, $id) {
            $deletado = ReservaModel::delete($conn, $id);
        if ($deletado) {
            return jsonResponse(['message' => "Deletado com Sucesso"]);
        }else {
            return jsonResponse(['message' => "Erro ao Deletar"], 404);
        }
    }

        public static function update($conn, $id, $data) {
            $Atualizado = ReservaModel::update($conn, $id, $data);
        if ($Atualizado) {
            return jsonResponse(['message' => "Reserva atualizado com sucesso"]);
        } else {
            return jsonResponse(['message' => "Reserva nao atualizado"], 404);
        }
    }
}
?>