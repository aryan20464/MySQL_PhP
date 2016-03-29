<?php
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = '2113';
	$db = 'company';

	$conn = mysql_connect($dbhost,$dbuser,$dbpass);
	mysql_select_db($db);
	
	$query = "SELECT * from employee order by id ASC";
	$result = mysql_query($query);
	$arr=array();
	while($row = mysql_fetch_array($result))
	{ $arr[] = $row; }
	//JSON-encode the response
	$json_response = json_encode($arr);

	echo $json_response;		



	//while($employee = mysql_fetch_array($result))
	//{
//		echo "<h3>" .$employee['first_name']. "</h3>";
//		echo "<h3>" .$employee['last_name']. "</h3>";
//	}
 	
?>  

