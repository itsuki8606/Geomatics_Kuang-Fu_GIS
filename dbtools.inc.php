<?php
  function create_connection()
  {
    $link = mysqli_connect("192.168.2.200:3306", "geomati1", "6p2zzz]13G.PCQ")
      or die("無法建立資料連接: " . mysqli_connect_error());
	  
	echo "<p>成功建立資料庫連接</p>";  
	  
    mysqli_query($link, "SET NAMES utf8");
			   	
    return $link;
  }
	
  function execute_sql($link, $database, $sql)
  {
    mysqli_select_db($link, $database)
      or die("開啟資料庫失敗: " . mysqli_error($link));
			
	echo "<p>成功開啟資料庫</p>"; 
			
    $result = mysqli_query($link, $sql);
		
    return $result;
  }
  
  function close_connection($link,$result)
  {
	mysqli_close($link);
	mysqli_free_result(result);
	
	echo "<p>關閉資料庫</p>"; 
  }
?>