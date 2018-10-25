<?php
echo "<h3>ENCUENTRA LA PALABRA QUE QUIERAS!</h3>";
$nombre = $_POST['nombre'];

$textolargo = $_POST['textoLargo'];

$palabradestacar = $_POST['destacar'];
 
    //COMPROBAR QUE NO ESTEN VACIOS LOS CAMPOS
    $nombrevacio = ($nombre !='') ? "El nombre está bien":"El nombre está vacio";
    //echo($nombrevacio);

    $textovacio = ($textolargo !='') ? "El texto está bien":"El texto está vacio";
    //echo($textovacio);

    $palabravacia = ($palabradestacar !='') ? "La palabra está bien":"La palabra está vacia";
    //echo($palabravacia);

    //COMPROBAR SI SE ENCUENTRA LA PALABRA
    $cadenatexto = $textolargo;
    $cadenabuscada   = $palabradestacar;
    $posicion_coincidencia = strpos($cadenatexto, $cadenabuscada);
    $reemplazar = $cadenabuscada;
    $palabras=[];
    $palabrasbuscadas=[];
    
    $palabras = explode(" ", $cadenatexto);
    $palabrasbuscadas = explode(" ", $cadenabuscada);
    echo "<br><br>El número de elementos en el array es: " . count($palabras).'<br>';
    foreach ($palabras as $valor) {
        echo($valor.'<br>');
    }
    echo "<br><br>El número de elementos introducido es: " . count($palabrasbuscadas).'<br>';
    foreach ($palabrasbuscadas as $valor1) {
        echo($valor1.'<br>');
    }


            if ($posicion_coincidencia === false) {
                echo "No se ha encontrado la palabra deseada";
                } else {
                        $palabraDestacadaSuelta = implode(" ", $palabrasbuscadas);
                        $palabraBuscadaSuelta = implode(" ", $palabras);
                        $resultado = str_replace($palabraDestacadaSuelta,'<b>'.$palabraBuscadaSuelta.'</b>', $cadenatexto); 
                        var_dump($resultado);
                        echo "<p> Texto : $cadenatexto <br> Texto con palabra encontrada: $resultado </p>";
                        echo "Hay ".str_word_count($cadenatexto, 0). " palabras en la cadena. ";
                    }     
            

    
?>
