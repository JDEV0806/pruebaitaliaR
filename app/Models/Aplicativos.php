<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aplicativos extends Model
{
    protected $table = 'aplicativos'; // Especifica el nombre de la tabla

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'url',
        // Agrega aquí todos los campos que deseas asignar masivamente
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        // Especifica aquí la conversión de tipo para los campos si es necesario
    ];

    // Puedes definir relaciones, mutadores, accesores y otros métodos aquí
}
