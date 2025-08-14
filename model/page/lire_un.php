<?php

    // Vérification de la méthode (GET)
    if ($_SERVER['REQUEST_METHOD'] !== 'GET'){
        error_log("Méthode non autorisée: " . $_SERVER['REQUEST_METHOD']);
        http_response_code(405);
        json_encode(
            'error' => "Méthode non autorisée",
            'message' => "La méthode utilisée ne correspond pas à celle requise.",
        )
    }

    // Récupération variable


    // Requête
    try{
        $query = "SELECT * FROM page WHERE id_page = ?";
        $params = [];

        if (!isset($_GET['id_page'])){
            $params[] = $_GET['id_page'];
        }

        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $page = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$page) {
            http_response_code(404);
            echo json_encode([
                'error' => 'Page non trouvé',
                'message' => "Aucune page n'a été trouvée avec les critères spécifiés",
                'critères_recherche' => [
                    'id_page' => $_GET['id_page'] ?? null,
                ]
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }

        // Formater la réponse
        $response = [
            'donnees' => $page
        ];

        echo json_encode($response, JSON_UNESCAPED_UNICODE);

    } catch (Exception $e) {
        error_log("Erreur dans lire_un.php : " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'error' => 'Erreur serveur',
            'message' => $e->getMessage()
        ], JSON_UNESCAPED_UNICODE);
    }

    exit;
?>