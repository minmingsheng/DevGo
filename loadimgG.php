<?php 
     try{
         require("config.php");
         $sql="SELECT * FROM imgG";
         $stmt=$db->query($sql);
         $stmt->execute();
         $colors = $stmt->fetchAll(PDO::FETCH_ASSOC);
         $jaon['message'] = 'success';
         $jaon['data'] = $colors;
    }catch(PDOException $e){
        $jaon['message'] = 'error';
        $jaon['data'] = $err->getMessage();
    }
    echo json_encode($jaon)
 ?>