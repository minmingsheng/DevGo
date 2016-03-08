<?php 
	
	try {

		
		require("config.php");

		
		$sql = "DELETE FROM `imgG` WHERE `name` = :name";
		
		$statement = $db->prepare( $sql );
		$statement->bindParam( ':name', $_POST['name'] );
		
		$statement->execute();


		
		
		$retval['message'] = 'success';
	} catch( PDOException $err ) {
		$retval['message'] = 'error';
		$retval['data'] = $err->getMessage();
	}

	echo json_encode( $retval );
 ?>