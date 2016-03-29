<?php
$data = json_decode(file_get_contents("php://input"));
$eid = mysql_real_escape_string($data->eid);
$eno = mysql_real_escape_string($data->eno);
$fname = mysql_real_escape_string($data->fname);
$lname = mysql_real_escape_string($data->lname);
$dept = mysql_real_escape_string($data->dept);
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = '2113';
	$db = 'company';

	$conn = mysql_connect($dbhost,$dbuser,$dbpass);
	mysql_select_db($db);
	//mysql_query("INSERT INTO employee(id,emp_no,first_name,last_name,dept_name) VALUES ('".$eid."','".$eno."','".$fname."','".$lname."','".$dept."')");
	mysql_query("INSERT INTO `employee`(`id`,`emp_no`, `first_name`, `last_name`, `dept_name`) VALUES ('$data->eid','$data->eno','$data->fname','$data->lname','$data->dept')");
    //$query="insert into employee(id,emp_no,first_name,last_name,dept_name) VALUES (4,4,'da','adf','asd')";
	//mysql_query($query);	
?>  

