<?php
   try{require("config.php");
        $sql = "INSERT INTO `imgL` (`image`) VALUES ( :image );";
        $statement = $db->prepare( $sql );
        $statement->bindParam( ':image', $_POST["img"] );
        $statement->execute();
        $retval['message'] = 'success';
        $retval['jason'] = $_POST["img"];

	} catch( PDOException $err) {
        $retval['jason'] = $_POST["img"];
		$retval['message'] = 'error';
		$retval['data'] = $err->getMessage();
	}
	
	echo json_encode($retval);
?>