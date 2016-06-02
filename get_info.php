<?php

$id = '13037654320';
$host = 'localhost';
$username = 'root';
$passwd = '19678zy';
$dbn = 'student_info';

$dbc = mysqli_connect($host, $username, $passwd, $dbn)
        or die('connect error');


$table_name = "register";

$query = "SELECT  id, name, major, class, sexuality, birth, contact_way, entry_date, _from FROM $table_name WHERE id=$id";


$result = mysqli_query($dbc, $query)
        or die('Error query database connection.');

$row = mysqli_fetch_array($result);

//echo $row;
$name = $row['name'];
$major = $row['major'];
$class = $row['class'];
$sexuality = $row['sexuality'];
$birth = $row['birth'];
$entry_date = $row['entry_date'];
$_from = $row['_from'];
$contact_way = $row['contact_way'];

$detalis = array(
    'details'    =>      
"<?xml version=\"1.0\"?>
<item id=\"itemGuitar\">
 
 <id>$id</id>
 <name>$name</name>
 <birth>$birth</birth>
 <entry_date>$entry_date</entry_date>
 <_from>$_from</_from>
 <contact_way>$contact_way</contact_way>
 <major>$major</major>
 <class>$class</class>
<sexuality>$sexuality</sexuality>
</item>",);



header("Content-Type: text/xml");
echo $detalis['details'];
//echo $detalis['details'];
mysqli_close($dbc);
?>
