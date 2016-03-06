<?php
	$note = $_GET['note'];
	$id = $_GET['id']+1;
	try{
		require("config.php");
		$sql = "UPDATE `devgo`.`Article` SET `Notes` = :note WHERE `article`.`ID` = :id";
		$stmt = $db->prepare($sql);
		$stmt->bindParam(':note', $note);
		$stmt->bindParam(':id', $id);
		$stmt->execute();

		require("config.php");
		$sql = "SELECT `Notes` FROM `Article` WHERE `ID` = {$id}";
		$go = $db->query($sql);
		$nnnn = $go->fetchAll( PDO::FETCH_ASSOC); 
		echo $nnnn[0]['Notes'];
		// echo $id;
	}catch(PDOException $e){
		echo "Error: " . $e->getMessage();
	}
 ?>