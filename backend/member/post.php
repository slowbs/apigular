<?php

$data = json_decode(file_get_contents('php://input'));

/** Validation */
if(isset($data->mem_name) && isset($data->mem_email) && isset($data->mem_address) && isset($data->mem_phone))
{
    #check null
    if(empty($data->mem_name)){
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก mem_name'
        ]));
    }
    elseif(empty($data->mem_email)){
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก mem_email'
        ]));
    }
    elseif(empty($data->mem_phone)){
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก mem_phone'
        ]));
    }

    // echo json_encode([
    //     'message' => 'valid'
    // ]);
    $query = "INSERT into members (mem_name, mem_email, mem_address, mem_phone) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'ssss',
        $data->mem_name,
        $data->mem_email,
        $data->mem_address,
        $data->mem_phone
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($database);
    
    /** เช็ค error */
    if($error_message){
        http_response_code(400);
        exit(json_encode([
            'message' => $error_message
        ]));
    }
    
    echo json_encode([
        'message' => 'เพิ่มสำเร็จ'
    ]);
}
else{
    http_response_code(400);
    exit(json_encode([
        'message' => 'รายการ Request ไม่ถูกต้อง'
    ]));
}



            // echo json_encode([
            //     'message' => 'POST Member',
            //     'php_data' =>  'จาก php',
            //     //'post_data' => $request->message
            //     'post_data' => $data
            //     ]);