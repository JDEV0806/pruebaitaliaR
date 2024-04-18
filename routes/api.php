<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\VPVenta;
use App\Models\Aplicativos;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/PVenta', function () {
    $datos = Aplicativos::all();
    return response()->json($datos);
})->name('PVenta');

Route::get('/v_pventas', function () {
    $datos = VPVenta::all();
    return response()->json($datos);
})->name('v_pventas');

Route::get('/user/{id}', function ($id) {
    $user = User::where('id', $id)->get();
    return response()->json($user);
 })->name('user');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
