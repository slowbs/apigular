<?php

$data = json_decode(file_get_contents('php://input'));
            // echo json_encode([
            //     'message' => 'UPDATE Member',
            //     'php_data' =>  'จาก php',
            //     // 'put_data' => $request->message,
            //     // 'put_data2' => $request->message2,
            //     'data' => $result,
            //     'id' => $_GET['id']
            //     ]);
if(isset($_GET['id']))
{
    /** Validation */
    if(isset($data->mem_name) && isset($data->mem_email) && isset($data->mem_address) && isset($data->mem_phone))
    {
        #check null
        if(empty($data->mem_name))
        {
            http_response_code(400);
            exit(json_encode([
                'message' => 'กรอก mem_name'
            ]));
        }
        elseif(empty($data->mem_email))
        {
            http_response_code(400);
            exit(json_encode([
                'message' => 'กรอก mem_email'
            ]));
        }
        elseif(empty($data->mem_phone))
        {
            http_response_code(400);
            exit(json_encode([
                'message' => 'กรอก mem_phone'
            ]));
        }

        // echo json_encode([
        //     'message' => 'valid'
        // ]);
        $query = "UPDATE members SET mem_name = ?, mem_email = ?, mem_address = ?, mem_phone =?, mem_updated = NOW() WHERE mem_id = ?";
        $stmt = mysqli_prepare($database, $query);
        mysqli_stmt_bind_param($stmt, 'ssssi',
            $data->mem_name,
            $data->mem_email,
            $data->mem_address,
            $data->mem_phone,
            $_GET['id']
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
        
        exit (json_encode([
            'message' => 'แก้ไขสำเร็จ'
        ]));
    }
}
http_response_code(400);
echo json_encode([
    'message' => 'รายการ Request ไม่ถูกต้อง'
    ]);
