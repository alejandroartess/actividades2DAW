<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Actividad Voluntaria 01</title>
</head>
<body>
    <?php
        for ($i=1; $i < 101; $i++) { 
            if (($i % 3 == 0) && ($i % 5 == 0)) {
                echo "<font color=\"green\"> FizzBuzz<br> </font>";
            }
            else {
                if ($i % 3 == 0) {
                    echo "<font color=\"red\"> Fizz<br> </font>";
                    }
                if ($i % 5 == 0) {
                    echo "<font color=\"blue\"> Buzz<br> </font>";
                    }
                if (($i % 3 != 0) && ($i % 5 != 0)) {
                    echo"$i<br>";;
                    }
            }
        }
    ?>
</body>
</html>