<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::prefix('v1')->group(function () {
    Route::apiResource("user", "Api\UserController");
    Route::post('sessions',"Api\SessionController@login");
    Route::post('register',"Api\SessionController@register");

    Route::group(['middleware' => ['jwt.auth']], function () {

        //Route::apiResource("project", "Api\ProjectController");
        //Route::apiResource("task", "Api\TaskController");
    });


});


