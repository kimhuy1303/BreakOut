<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="background.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link
href="https://fonts.googleapis.com/css?family=Righteous"
rel="stylesheet"
/>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap" rel="stylesheet">
<script src="https://unpkg.com/phosphor-icons"></script>
<title>REGISTER</title>

<body>
    <div id="border">
        <div id="blurBackground">
            <div id="menu-start-game">
                <div class="logo">
                    <i class="ph-target" id = "icon"></i>
                    <p id="text">BRICK BREAKER</p>
                </div>

                <form>
                    <div class="form-group">
                        <input
                            id="username"
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            name="username"
                            autocomplete="off"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            id="password"
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            name="password"
                        />
                        <i class="ph-eye-slash" ></i>
                        <i class="ph-eye" style="display: none;"></i>
                    </div>
                    <div class="form-group">
                        <input
                            id="repassword"
                            type="repassword"
                            class="form-control"
                            placeholder="Confirm Password"
                            name="repassword"
                        />
                        <i class="ph-eye-slash" ></i>
                        <i class="ph-eye" style="display: none"></i>
                    </div>
                    <p id="alert"></p>
                    <button  id="login" type="button" class="btn btn-default"><ion-icon class="game" name="rocket"></ion-icon>
                        <p id="login-text">SIGN UP</p>
                    </button>
                    <div></div>
                </form>
            </div>
        </div>
    </div>
</body>
<script src="register.js"></script>

</html>