<!DOCTYPE html>
<html>
<head>
    <title>上傳</title>
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: center ;
            flex-direction: column;
            min-height: 100vh;

        }
    </style>

</head>  
<body>
    <?php if(isset($_GET['error'])):?>
        <p><?php echo $_GET['error']; ?></p>
    <?php endif ?>

    <form action="upload.php" method="post" enctype="multipart/form-data">

    <input type="file" name="my_image">
    <input type="submit" name="submit" value="上傳">


    </form>

</body>    
</body>
</html>
