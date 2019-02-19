<html>
<body>

Welcome <?php echo $_POST["Name"]; ?><br>
Your email address is: <?php echo $_POST["Email"]; ?><br>
Your content is: <?php echo $_POST["Content"]; ?><br>

<?php
  require_once("dbtools.inc.php");
  $Name = $_POST['Name'];
  $Email = $_POST['Email'];
  $Content = $_POST['Content'];
  $link = create_connection(); 
  $sql ="INSERT INTO contact(Name,Email,Content) 
			VALUES ('$Name','$Email','$Content')";
  $result = execute_sql($link, "geomati1_2018GIS", $sql);
  close_connection($link,$result);  
?>

</body>
</html>