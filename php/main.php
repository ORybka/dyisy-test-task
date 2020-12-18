<?php 
   $time  = $_POST['time'];
   $btnID = $_POST['btnID'];
   $file = fopen("/php/click.log".$fn.".record","w");
   echo fwrite($time,$btnID);
   fclose($file);
?>
