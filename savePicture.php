<?php
   try{require("config.php");
        $name = addslashes($_FILES['picture']['name']);
        $file = addslashes($_FILES['picture']["tmp_name"]);
        $file = file_get_contents($file);
        $file = base64_encode($file);
        $sql = "INSERT INTO `imgG`(`name`,`image`) VALUES ( :name, :image );";
        $statement = $db->prepare( $sql );
        $statement->bindParam( ':name', $name );
        $statement->bindParam( ':image', $file );
        $statement->execute();
        $retval['message'] = 'success';
        header("Location: Copy.php");
	} catch( PDOException $err) {
		$retval['message'] = 'error';
		$retval['data'] = $err->getMessage();
	}
	
	echo json_encode($retval);
?>