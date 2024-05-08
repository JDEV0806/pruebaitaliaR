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
$num = null;

Route::get('/PVenta/{num}', function ($numParam) use (&$num) {
    if ($numParam == 0) {
       
    } else {
        $num = $numParam;
    }
    
    return response()->json($num);
})->name('PVenta');

Route::get('/v_pventas', function () {
    $datos = VPVenta::all();
    return response()->json($datos);
})->name('v_pventas');


Route::post('/newUser', function (Request $request) {
    $user = new User;
    $user->name = $request->input('nombre');
    $user->apellidopaterno = $request->input('Apaterno');
    $user->apellidomaterno = $request->input('Amaterno');
    $user->email = $request->input('correo');
    $user->nomina = $request->input('nomina');
    $user->usuario = $request->input('usuario');
    $user->password = $request->input('contrasena');
    $user->idDepartamento = $request->input('departamento');
    $user->idPuesto = $request->input('puesto');
    $user->priv = json_encode($request->input('priv')); // Guarda el JSON como una cadena
    $user->save();
    
    return response()->json(['success' => 'Usuario creado con éxito'], 200);
});

Route::put('/editUser/{id}', function (Request $request, $id) {
    $user = User::find($id);
    if ($user) {
        $user->name = $request->input('nombre');
        $user->apellidopaterno = $request->input('Apaterno');
        $user->apellidomaterno = $request->input('Amaterno');
        $user->email = $request->input('correo');
        $user->nomina = $request->input('nomina');
        $user->usuario = $request->input('usuario');
        // $user->password = $request->input('contrasena');
        $user->idDepartamento = $request->input('departamento');
        $user->idPuesto = $request->input('puesto');
        $user->priv = json_encode($request->input('priv')); // Guarda el JSON como una cadena
        $user->save();
        
        return response()->json(['success' => 'Usuario actualizado con éxito'], 200);
    } else {
        return response()->json(['error' => 'Usuario no encontrado'], 404);
    }
});

Route::delete('/deleteUser/{id}', function ($id) {
    $user = User::find($id);
    if ($user) {
        $user->delete();
        return response()->json(['success' => 'Usuario eliminado con éxito'], 200);
    } else {
        return response()->json(['error' => 'Usuario no encontrado'], 404);
    }
});

Route::get('/userInfo/{id}', function ($id) {
    $user = User::find($id);
    if ($user) {
        return response()->json($user, 200);
    } else {
        return response()->json(['error' => 'Usuario no encontrado'], 404);
    }
});

Route::get('/userD', function () {
    $users = User::all();
    return response()->json($users);
})->name('userD');

Route::get('/users', function () {
    $users = User::all();
    return response()->json($users);
})->name('users');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
