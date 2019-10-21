 <?php
 
 $data = json_decode(file_get_contents('php://input'));
//  $data->email = 'session@mail.com';
//  $data->phone = '0811111111';

 if (isset($data->email) && isset($data->phone))
 {

    if(empty($data->email))
    {
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรุณากรอก email'
        ]));
    }

    elseif(empty($data->phone))
    {
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรุณากรอก phone'
        ]));
    }
    
    $email = mysqli_real_escape_string($database, $data->email);
    $phone = mysqli_real_escape_string($database, $data->phone);
    $query = mysqli_query($database, "
        SELECT * from 
        members where 
        mem_email = '$email' and 
        mem_phone = '$phone'
    ");
    $result = mysqli_fetch_array($query, MYSQLI_ASSOC);

    //http_response_code(400);
    //$_SESSION['login'] = $data;
    if(empty($result))
    {
        http_response_code(400);
        exit(json_encode([
            'message' => 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
        ]));
    }

    $_SESSION['login'] = $result['mem_id'];
    //http_response_code(400);
    exit(json_encode([
        'message'   => 'Login สำเร็จ',
        //'session'   => $_SESSION['login']
        //'result'    => $_SESSION['login']
    ]));
 }

 http_response_code(400);
 echo json_encode([
     'message' => 'The reqeust is invalid',
     $data
 ]);