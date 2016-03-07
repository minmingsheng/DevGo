<?php 
	
	try {

		
		require("config.php");

		
		$sql = "DELETE FROM `ColorNotes` WHERE `ColorCode` = :id";
		
		$statement = $db->prepare( $sql );
		$statement->bindParam( ':id', $_POST['id'] );
		
		$statement->execute();


		
		
		$retval['message'] = 'success';
	} catch( PDOException $err ) {
		$retval['message'] = 'error';
		$retval['data'] = $err->getMessage();
	}

	echo json_encode( $retval );
 ?>