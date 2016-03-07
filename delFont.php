<?php 
	 
		
		try {

			
			require("config.php");

			
			$sql = "DELETE FROM `FontNotes` WHERE `FontName` = :id";
			
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