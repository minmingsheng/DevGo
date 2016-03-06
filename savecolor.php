 <?php 						
  							
                            if(isset($_GET["colorCode"])){
                                

                               try{
                                    $colorCode = $_GET["colorCode"];
                                   
                               require("config.php");

                                
                                $sql="INSERT INTO `ColorNotes` (`ColorCode`) VALUES (:colorCode)";
                                   
                                $stmt = $db->prepare($sql);
                                   
                                $stmt->bindParam(':colorCode', $colorCode);
                                   
                                $stmt->execute();
                             
                              
                               echo 'done';
                               header("Location:Notebook.php");
                               }catch(PDOException $e){
                               
                                   echo "Wrong!".$e->getMessage();
                               }
                               
                            }

                            
                        ?>