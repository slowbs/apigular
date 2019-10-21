<?php

$routes['/api/member']['GET'] = 'member/get.php';
$routes['/api/member']['POST'] = 'member/post.php';
$routes['/api/member']['PUT'] = 'member/put.php';
$routes['/api/member']['DELETE'] = 'member/delete.php';

/** เอาไว้เทส session หน้า login ของ php */
//$routes['/api/login']['GET'] = 'account/login.php';


$routes['/api/login']['POST'] = 'account/login.php';
$routes['/api/logout']['POST'] = 'account/logout.php';
$routes['/api/profile']['GET'] = 'account/profile.php';