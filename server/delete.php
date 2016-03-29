<?php 
$data =json_decode(file_get_contents("php://input"));
$dbhost='localhost';
$dbuser='root';
$dbpass='2113';
$db='company';
$conn=mysql_connect($dbhost,$dbuser,$dbpass);
mysql_select_db($db);
mysql_query("DELETE FROM `employee` WHERE id='$data->eid'");
?>