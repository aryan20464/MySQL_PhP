<?php 
$data = json_decode(file_get_contents("php://input"));
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '2113';
$db = 'company';

$conn = mysql_connect($dbhost,$dbuser,$dbpass);
mysql_select_db($db);
mysql_query("UPDATE employee SET id='$data->emp_id',emp_no='$data->emp_no',first_name='$data->emp_fname',last_name='$data->emp_lname',dept_name='$data->emp_dept' WHERE id='$data->emp_id'");
//mysql_query("INSERT INTO `employee`(`id`,`emp_no`, `first_name`, `last_name`, `dept_name`) VALUES ('$data->emp_id','$data->emp_no','$data->emp_fname','$data->emp_lname','$data->emp_dept')");



 ?>	