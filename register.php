<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet" />
    <script src="https://unpkg.com/phosphor-icons"></script>
    <title>My Example</title>

    <!-- CSS -->
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .logo {
        font-family: "Righteous";
        font-style: normal;
        width: 90%;
        height: 50px;
        margin: 2rem auto;
        /* text-align: center;/ */
        display: block;
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .logo p {
        color: #fefcfe;
        /* left: 15%;
        position: absolute; */
        text-shadow: 2px 0 0 #e02a4f, -2px 0 0 #e02a4f, 0 2px 0 #e02a4f,
            0 -2px 0 #e02a4f, 1px 1px #e02a4f, -1px -1px 0 #e02a4f, 1px -1px 0 #e02a4f,
            -1px 1px 0 #e02a4f;
    }

    .logo i {
        font-size: 55px;
        /* position: absolute; */
        /* left: 4%; */

        transform: translateY(1px);
        /* display: block; */
        color: #f9c0cc;
    }

    .myForm {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        font-size: 0.8em;
        width: 45em;
        height: 50em;
        padding: 1em;
        border: 1px solid #ccc;
    }

    .myForm>form p {
        margin: 15px auto;
        transform: translateY(80px);
        width: 90%;
    }

    .myForm * {
        box-sizing: border-box;
    }

    .myForm label {
        font-size: 1.5em;
        font-weight: 600;

    }

    .myForm input {
        display: block;
        width: 100%;
        border-radius: 0.5em;
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        font-size: 0.9em;
        padding: 0.5em;
        margin: 0.3em 0 0.3em 0;
        border: 1px solid rgba(80, 80, 80, 0.5);
    }

    .myForm input[type="submit"] {
        padding: 0.5em;
        font-size: 20px;
        border-radius: 0.5em;
        background: #f2fa;
        border: none;
        font-weight: bold;
        margin-top: 1em;
    }

    .myForm input[type="submit"]:hover {
        background: #f2fe;
        cursor: pointer;
    }
    </style>

</head>

<body>
    <div class="myForm">
        <div class="logo">
            <i class="ph-target"></i>
            <p>BRICK BREAKER</p>
        </div>
        <form method="post" action="#">
            <p>
                <label>Name
                    <input type="text" name="name" placeholder="Name">
                </label>
            </p>

            <p>
                <label>Password
                    <input type="password" placeholder="Password" name="password">
                </label>
            </p>
            <p>
                <label>Confirm Password
                    <input type="text" name="customer_name" placeholder="Confirm Password">
                </label>
            </p>

            <p><input type="submit" name="submit-button" value="Create Account"></input></p>

        </form>
        <!-- <form>
                <div class="form-group">
                    <input id="username" type="text" class="form-control" placeholder="Username" name="username" />
                </div>
                <div class="form-group">
                    <input id="password" type="password" class="form-control" placeholder="Password" name="password" />
                    <i class="ph-eye-slash" id="btnPassword"></i>
                    <i class="ph-eye" id="btnPassword"></i>
                </div>
                <div class="form-group">
                    <input id="password" type="password" class="form-control" placeholder="Confirm Password"
                        name="password" />
                    <i class="ph-eye-slash" id="btnPassword"></i>
                    <i class="ph-eye" id="btnPassword"></i>
                </div>
                <p id="alert"></p>
            </form> -->
    </div>

</body>

</html>