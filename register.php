<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register</title>
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
    <style>
        .boxregis {
        background-image: url(https://cdn.discordapp.com/attachments/1021309167371300900/1041389331467747488/12.png);
        width: 100%;
        height: 400px;
        padding: 50px;
        text-align: center;
        margin-bottom: 60px;
        background-size: cover;
    }
        </style>
</head>

<body>
    <?php
    // define variables and set to empty values
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

    // Create a Table using SQL 
    /*$sql = <<<EOF
   CREATE TABLE CUSTOMERDATA
   (
   NAME           TEXT    NOT NULL,
   LASTNAME        TEXT     NOT NULL,
   EMAIL TEXT PRIMARY KEY     NOT NULL,
   PASSWORD TEXT NOT NULL);
 EOF;

    $ret = $db->exec($sql);
    if (!$ret) {
        echo $db->lastErrorMsg();
    } else {
        echo "Table created successfully<br>";
    }*/

    $fnameErr = $lnameErr = $emailErr = $passwordErr = "";
    $fname = $lname = $email = "";
    $check = 0;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["fname"])) {
            $fnameErr = "กรุณากรอกชื่อ";
            $check += 1;
        } else {
            $fname = test_input($_POST["fname"]);
            // check if fname only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z-' ]*$/", $fname)) {
                $fnameErr = "กรุณากรอกชื่อใหม่อีกครั้ง";
                $check += 1;
            }
        }

        if (empty($_POST["lname"])) {
            $lnameErr = "กรุณากรอกนามสกุล";
            $check += 1;
        } else {
            $lname = test_input($_POST["lname"]);
            // check if lname only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z-' ]*$/", $lname)) {
                $lnameErr = "กรุณากรอกนามสกุลอีกครั้ง";
                $check += 1;
            }
        }

        if (empty($_POST["email"])) {
            $emailErr = "กรุณากรอกอีเมล";
            $check += 1;
        } else {
            $email = test_input($_POST["email"]);
            // check if e-mail address is well-formed
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "กรุณากรอกอีเมลอีกครั้ง";
                $check += 1;
            }
        }

        if (empty($_POST["password"])) {
            $passwordErr = "กรุณากรอกรหัสผ่าน";
            $check += 1;
        }
    }

    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Process
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
        <div class="boxregis">
        </div>
        <div class="login1">
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <div class="mb-3">
                    <label class="form-label">ชื่อ</label> <span class="error">* <?php echo $fnameErr; ?></span>
                    <input type="text" class="form-control" id="fname" placeholder="กรอกชื่อ" name="fname">
                </div>
                <div class="mb-3">
                    <label class="form-label">นามสกุล</label><span class="error">* <?php echo $lnameErr; ?></span>
                    <input type="text" class="form-control" id="lname" placeholder="กรอกนามสกุล" name="lname">
                </div>
                <div class="mb-3">
                    <label class="form-label">อีเมล</label><span class="error">* <?php echo $emailErr; ?></span>
                    <input type="email" class="form-control" id="email" placeholder="กรอกอีเมล" name="email">
                </div>
                <div class="mb-3">
                    <label class="form-label">รหัสผ่าน</label><span class="error">* <?php echo $passwordErr; ?></span>
                    <input type="password" class="form-control" id="password" placeholder="กรอกรหัสผ่าน" name="password">
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-success" type="submit" name="submit">ลงทะเบียน</button>
                    <p style="padding-top:0px">มีบัญชีอยู่แล้ว? <a href="login.php">คลิกเพื่อเข้าสู่ระบบ</a></p>
                </div>
            </form>
        </div>

        <?php
        if (isset($_POST['submit']) && $check == 0) {
            $em_name = $_POST['fname'];
            $em_lastname = $_POST['lname'];
            $em_email = $_POST['email'];
            $em_password = $_POST['password'];
    
            $sql = <<<EOF
          INSERT INTO CUSTOMERDATA (NAME,LASTNAME,EMAIL,PASSWORD)
          VALUES ('$em_name', '$em_lastname', '$em_email', '$em_password');
          EOF;
    
            $ret = $db->exec($sql);
            if (!$ret) {
                echo $db->lastErrorMsg();
            }
        }
    
        // Close database
        $db->close();
         ?>
    </div>
</body>
<script src="cart.js"></script>
</html>