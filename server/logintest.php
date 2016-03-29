<?php 
$data = json_decode(file_get_contents("php://input"));
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '2113';
$db = 'company';
if($data->user==$dbuser && $data->pass==$dbpass)
	print true;
else print 'error';
?>					