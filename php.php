<?php
    // global $db;

    try{
        require("config.php");
        // $syntax = "html5";
        $sql = "SELECT `syntax` FROM `php`";
        $stmt = $db->query($sql);
        $data = $stmt->fetchAll( PDO::FETCH_ASSOC );

        // echo $syntax
        // echo json_encode($data);
        $retval['message'] = 'success';
        $retval['data'] = $data;
    }catch(PDOException $err){
        $retval['message'] = 'error';
        $retval['data'] = $err->getMessage();
    }

    echo json_encode($retval)
?>