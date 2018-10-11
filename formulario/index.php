<?php

$numero1 = $_POST['numero1'];

$numero2 = $_POST['numero2'];

$numero3 = $_POST['numero3'];

if (!is_numeric($numero1) || $numero1<=0 || $numero1>=255) {
header("Location:".$_SERVER['HTTP_REFERER']);
}
elseif (!is_numeric($numero2) || $numero2<=0 || $numero2>=255) {
  header("Location:".$_SERVER['HTTP_REFERER']);
  }
  elseif (!is_numeric($numero3) || $numero3<=0 || $numero3>=255) {
    header("Location:".$_SERVER['HTTP_REFERER']);
    }else {
    echo "<body style='background-color:rgb($numero1,$numero2,$numero3)'></body>";
  }
?>
