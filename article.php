<?php
	// global $db;
	require("config.php");
	$sql = "SELECT `ArticleName`, `Texts`, `Notes` FROM `Article`";
	$stmt = $db->query($sql);
    $data = $stmt->fetchAll( PDO::FETCH_ASSOC );

    echo json_encode($data);
?>