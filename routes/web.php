<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Index');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/index', function () {
    return Inertia::render('Index');
})->middleware(['auth', 'verified'])->name('index');

// Route::get('/listaDePrecios', function () {
//     return Inertia::render('P_PVentas/ListaDePrecios');
// })->middleware(['auth', 'verified'])->name('listaP');

// Route::get('/proyectos', function () {
//     return Inertia::render('P_PVentas/Proyectos');
// })->middleware(['auth', 'verified'])->name('proyectos');

// Route::get('/folios', function () {
//     return Inertia::render('P_PVentas/Folios');
// })->middleware(['auth', 'verified'])->name('folios');

// Route::get('/clientes', function () {
//     return Inertia::render('P_PVentas/Clientes');
// })->middleware(['auth', 'verified'])->name('clientes');

// Route::get('/asesor', function () {
//     return Inertia::render('P_PVentas/Asesor');
// })->middleware(['auth', 'verified'])->name('asesor');

// Route::get('/productos', function () {
//     return Inertia::render('P_PVentas/Productos');
// })->middleware(['auth', 'verified'])->name('productos');

// Route::get('/detallesYProductos', function () {
//     return Inertia::render('P_PVentas/DetallesYProductos');
// })->middleware(['auth', 'verified'])->name('detallesP');

// Route::get('/imagenesYFotos', function () {
//     return Inertia::render('P_PVentas/ImagenesYFotos');
// })->middleware(['auth', 'verified'])->name('imagenesF');

// Route::get('/videosArmandoSilleria', function () {
//     return Inertia::render('P_PVentas/VideosArmandoSilleria');
// })->middleware(['auth', 'verified'])->name('videosAS');

// Route::get('/comercializacion', function () {
//     return Inertia::render('P_PVentas/Comercializacion');
// })->middleware(['auth', 'verified'])->name('comercializacion');

// Route::get('/oficial', function () {
//     return Inertia::render('P_PVentas/Oficial');
// })->middleware(['auth', 'verified'])->name('oficial');

// Route::get('/complementos', function () {
//     return Inertia::render('P_PVentas/Complementos');
// })->middleware(['auth', 'verified'])->name('complementos');

// Route::get('/inventarios', function () {
//     return Inertia::render('P_PVentas/Inventarios');
// })->middleware(['auth', 'verified'])->name('inventarios');

// Route::get('/top50', function () {
//     return Inertia::render('P_PVentas/Top50');
// })->middleware(['auth', 'verified'])->name('consultarTOP');

// Route::get('/existenciasGenerales', function () {
//     return Inertia::render('P_PVentas/ExistenciasGenerales');
// })->middleware(['auth', 'verified'])->name('consultarEG');

// Route::get('/existenciasSilleria', function () {
//     return Inertia::render('P_PVentas/ExistenciasSilleria');
// })->middleware(['auth', 'verified'])->name('consultarES');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
