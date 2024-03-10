<?php include "db_conn.php";?>
<!DOCTYPE html>
<html>
<head>
    <title>view</title>

</head>  
<body>
   <a href="innnn.php">$#8592;</a>
   <?php
        $sql = "SELECT * FROM images ORDER BY id DESC";
        $res = mysqli_query($conn, $sql);

        if (mysqli_num_rows($res) > 0){
            while($images = mysqli_fetch_assoc($res)){   ?>

            <div class="alb">
                <img src="icons/<?=$images['image_url']?>">
        </div>
        <?php } }?>

</body>    
</body>
</html>