<?php
  $fname = $_POST['fname'];
  $email = $_POST['email'];
  $telephone = $_POST['telephone'];
  $password = $_POST['password'];
  $cpassword = $_POST['cpassword'];

  print_r($_POST);
  // Database connecton
  // $conn = new mysqli('localhost', 'root', '', 'test');
  // if ($conn -> connect_error) {
  //   die('Connection failed' .$conn -> connect_error);
  // }
  // else {
  //   $stmt = $conn -> prepare("insert into loginUser(fname, email, telephone, password, cpassword) values(?, ?, ?, ?, ?)")
  // }

?>