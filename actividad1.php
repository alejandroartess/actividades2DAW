<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Actividad 1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <?php for ($color = 0; $color < 256; $color++) {
        echo "<div style='background-color:rgb(0,$color,0)'>(0,$color,0)</div>";
    }
    ?>
    
</body>
</html>