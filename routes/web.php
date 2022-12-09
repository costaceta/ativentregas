<?php

use App\Http\Controllers\ActivitiesController;
use App\Http\Controllers\ActivityTypeController;
use App\Http\Controllers\DashboardController;
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
})->middleware(['auth', 'verified'])->name('welcome');

/*** OPERAÇÃO ***/
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::resource('/activities', ActivitiesController::class)
    ->only(['index', 'store'])
    ->middleware(['auth', 'verified']);

/*** CADASTROS ***/
Route::get('/map-areas', function () {
    return Inertia::render('MapAreas/Index', []);
})->middleware(['auth', 'verified']);

Route::resource('/activities-types', ActivityTypeController::class)
    ->only(['index','create', 'store'])
    ->middleware(['auth', 'verified']);

Route::get('/mobile-users', function () {
    return Inertia::render('MobileUsers/Index', []);
})->middleware(['auth', 'verified']);

Route::get('/form-model', function () {
    return Inertia::render('FormModel/Index', []);
})->middleware(['auth', 'verified']);

Route::get('/form-fields', function () {
    return Inertia::render('FormFiels/Index', []);
})->middleware(['auth', 'verified']);

/*** RELATÓRIOS ***/
Route::get('/team-productivity', function () {
    return Inertia::render('TeamProductivity/Index', []);
})->middleware(['auth', 'verified']);

Route::get('/itineraries', function () {
    return Inertia::render('Itineraries/Index', []);
})->middleware(['auth', 'verified']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
