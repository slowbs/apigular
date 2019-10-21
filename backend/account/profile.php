<?php

if ( isset($_SESSION['login']) && !empty($_SESSION['login']) )
{
    $mem_id = $_SESSION['login'];
    $query = mysqli_query($database, "SELECT * from members WHERE mem_id=$mem_id");
    $result = mysqli_fetch_assoc($query);
    exit(json_encode($result));
    //exit(json_encode($mem_id));
}

http_response_code(401);
echo json_encode([
    'message' => 'ไม่มีสิทธิ์เข้าถึง'
    //'message' => 'Profile API',
    //'session'   => $_SESSION['login']
]);