<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet">
    <script src="scripts.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<style>
    .error {
        color: #FF0000;
    }

    .boxlogin {
        background-image: url(https://cdn.discordapp.com/attachments/1021309167371300900/1041385022411788348/11.png);
        width: 100%;
        height: 400px;
        padding: 50px;
        text-align: center;
        margin-bottom: 60px;
        background-size: cover;
    }
</style>

<body>
    <?php

    class MyDB extends SQLite3
    {
        function __construct()
        {
            $this->open('customerdata.db');
        }
    }

    // Open Database 
    $db = new MyDB();
    if (!$db) {
        echo $db->lastErrorMsg();
    }


    $emailErr = $passwordErr = "";
    $email = "";
    $check = 0;
    $alreadylogin = 0;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["email"])) {
            $emailErr = "กรุณากรอกอีเมล";
            $check += 1;
        }
        if (empty($_POST["password"])) {
            $passwordErr = "กรุณากรอกรหัสผ่าน";
            $check += 1;
        }
    }

    if (isset($_POST['submit']) && $check == 0) {
        $sql = "SELECT * from CUSTOMERDATA";
        $em_email = $_POST['email'];
        $em_password = $_POST['password'];

        $ret = $db->query($sql);
        while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {
            if (strcmp($row['EMAIL'], $em_email) == 0 && strcmp($row['PASSWORD'], $em_password) == 0) {
                $alreadylogin = 1;
                break;
            }
            /*elseif (strcmp($row['EMAIL'], $em_email) != 0 && strcmp($row['PASSWORD'], $em_password) != 0) {
                $emailErr = "กรุณากรอกอีเมลใหม่อีกครั้ง";
                $passwordErr = "กรุณากรอกรหัสผ่านใหม่อีกครั้ง";
                break;
            }*/
            
            elseif (strcmp($row['EMAIL'], $em_email) == 0 && strcmp($row['PASSWORD'], $em_password) != 0) {
                $passwordErr = "กรุณากรอกรหัสผ่านใหม่อีกครั้ง";
                break;
            }

            elseif (strcmp($row['EMAIL'], $em_email) != 0 && strcmp($row['PASSWORD'], $em_password) == 0) {
                $emailErr = "กรุณากรอกอีเมลใหม่อีกครั้ง";
                break;
            }
        }
    }

    ?>
    <div class="container1">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between navbarmenu">
            <ul class="nav col-12 col-md-auto justify-content-center mb-md-0 align-items-center">
                <li class="px-1">
                    <a href="index.html" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark">
                        <img src="https://cdn.discordapp.com/attachments/1021309167371300898/1037306046152192040/unknown.png" height="60px" class="px-3" />
                    </a>
                </li>
                <li>
                    <a class="nav-link px-2 text-dark" href="index.html">ITREE</a>
                </li>
            </ul>

            <!--menu-->
            <ul class="nav col-12 col-md-auto justify-content-center mb-md-0 align-items-center">
                <li class="tonmai px-3">
                    <a type="button" class="nav-link px-2 text-dark" onclick="showsubmenutree()" id="tree" value="1">ต้นไม้</a>
                    <div class="text-center sub-menu" id="sub_menu_tree">
                        <a class="col" href="insidetree.html" style="text-decoration: none;">
                            <img src="https://pueanry.co/wp-content/uploads/2020/05/Osofsky_Oct19-5.jpg">
                            <p>ต้นไม้ภายใน</p>
                        </a>
                        <a class="col" href="outsidetree.html" style="text-decoration: none;">
                            <img src="http://www.banidea.com/wp-content/uploads/2012/07/fengshui-garden-via-banidea-1.jpg">
                            <p>ต้นไม้ภายนอก</p>
                        </a>
                    </div>
                </li>

                <li class="px-3">
                    <a href="gardentools.html" class="nav-link px-2 text-dark">อุปกรณ์ทำสวน</a>
                </li>


                <li class="px-3">
                    <a href="contact.html" class="nav-link px-2 text-dark">ติดต่อเรา</a>
                </li>

                <li class="px-3">
                    <a class="nav-link px-2 carticon" href="cart.html">
                        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" height="40px">
                        <div id="numcart" class="numcart"></div>
                    </a>
                </li>

                <li class="px-3">
                    <a class="nav-link px-2" href="login.php">
                        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" height="40px">
                    </a>
                </li>
            </ul>
        </header>
        <div class="boxlogin">
        </div>
        <div class="login1">
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">อีเมล</label><span class="error">* <?php echo $emailErr; ?></span>
                    <input type="email" class="form-control" id="email" placeholder="กรอกอีเมล" name="email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">รหัสผ่าน</label><span class="error">* <?php echo $passwordErr; ?></span>
                    <input type="password" class="form-control" id="password" placeholder="กรอกรหัสผ่าน" name="password">
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-success" type="submit" name="submit"><a style="text-decoration: none; color: white;" href=<?php 
                    if($alreadylogin = 1) {
                        echo "index.html";
                    }
                     ?>>เข้าสู่ระบบ</a></button>
                    <p style="padding-top:0px">ยังไม่มีบัญชี? <a href="register.php">คลิกเพื่อลงทะเบียน</a></p>
                </div>
            </form>
        </div>

        <?php
        // Close database
        $db->close();
        ?>
    </div>
    <script>
        localStorage.setItem('alreadylogin', <?php echo $alreadylogin; ?>);
    </script>
</body>
<script src="cart.js"></script>
</html>