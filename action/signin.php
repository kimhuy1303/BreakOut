<?php 
    session_start();
    include('config.php');
    if(isset($_POST['loginButton']) && $_POST['loginButton']){
        if (isset($_POST['nameLogin']) && isset($_POST['passLogin'])) {
            $user = $_POST['nameLogin'];
            $pass = md5($_POST['passLogin']);
            $conn = connectdb();
            $sql = "SELECT * from `users` where `username` = '$user' and `password` = '$pass' and";
            $result = mysqli_query($conn, $sql);
            $count = mysqli_num_rows($result);
            if($count == 1){
              $_SESSION['loged'] = true;
              $_SESSION['user'] = $user;
              setcookie('success', "Đăng nhập thành công!", time()+2, "/","", 0);
            }else{
              setcookie('error', "Tên đăng nhập hoặc mật khẩu không đúng!", time()+1, "/","", 0);
            }
        }
      }
?>