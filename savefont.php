<?php 
try{
	require("config.php");
	$sql = "INSERT INTO `FontNotes` (`FontName`,`WebAddress`,`Notes`) VALUES (:FontName, :WebAddress, :FontNotes )";


	$stmt = $db->prepare($sql);

	$stmt->bindParam(':FontName', $_POST["FontName"]);
	$stmt->bindParam(':WebAddress', $_POST["WebAddress"]);
	$stmt->bindParam(':FontNotes', $_POST["FontNotes"]);

	$stmt->execute();
	$retval['message'] = 'success';
}catch(PDOException $e){
	$retval['message'] = 'error';
	$retval['data'] = $err->getMessage();
	
}
echo json_encode($retval);

?>