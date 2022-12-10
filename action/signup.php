<?php 
include('config.php');
$conn = connectdb();
if(isset($_POST['nameRegister']) && isset($_POST['passRegister']) && isset($_POST['passConfirm'])){
    $user = $_POST['nameRegister'];
    $pass = $_POST['passRegister'];
    $passConfirm = $_POST['passConfirm'];
    if($pass == $passConfirm){
        $pass = md5($pass);
        $sql = "insert into users(username,password) values ('$user','$pass')";
        $result = mysqli_query($conn,$sql);
        header('location:../BreakOut.php');
        setcookie('successRegister', "Đăng ký thành công!", time()+2, "/","", 0);
    }else{
        setcookie('errorRegister', "Mật khẩu xác thực lần 2 không trùng khớp!", time()+2, "/","", 0);
    }
    // print_r($result);
}
?>