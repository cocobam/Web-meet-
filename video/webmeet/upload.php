<?php

if(isset($_POST['submit']) && isset($_FILES['my_image']) ){
    include "db_conn.php";

    echo "<pre>";
    print_r($_FILES['my_image']);
    echo "</pre>";

    $img_name = $_FILES['my_image']['name'];
    $img_size = $_FILES['my_image']['size'];
    $tmp_name = $_FILES['my_image']['tmp_name'];
    $error = $_FILES['my_image']['error'];

    if($error === 0){
        if($img_size > 125000){
            $em = "檔案過大";
            header("Location: innnn.php?error=$em") ;
        }else{
            $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
            $img_ex_lc = strtolower($img_ex);
            $allowed_exs = array("jpg","jpeg","png");

            if(in_array($img_ex_lc, $allowed_exs)){
                $new_img_name = uniqid("IMG-",true).'.'.$img_ex_lc;
                $img_upload_path = 'icons/' .$new_img_name;
                move_uploaded_file($tmp_name,$img_upload_path);


                $sql = "INSERT INTO images(image_url) VALUES('$new_img_name')";
                mysqli_query($conn, $sql);
                header("Location: view.php");
            }else{
                $em = "這個檔案類型無法上傳";
                header("Location: innnn.php?error=$em") ;
            }
        }
    }else{
        $em = "未知錯誤";
        header("Location: innnn.php?error=$em") ;
    }

}else{
    header("Location: innnn.php");
}