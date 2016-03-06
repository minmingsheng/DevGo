<?php

	try{
		$dbName = "devgo";
		$host = "localhost";
		$user = "root";
		$passWord = "root";

		$sql = "SELECT * FROM ColorNotes";

		$smm = new PDO("mysql:host={$host}; dbname={$dbName}; charset=utf8",$user,$passWord);
		$smm -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$smm ->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

		$go = $smm -> query($sql);

		$colorData = $go->fetchAll(PDO::FETCH_ASSOC);
		$colorData = json_encode($colorData);
		echo($colorData);

	}catch(PDOException $e){
		echo "Error: " . $e -> getMessage();
	}
?>