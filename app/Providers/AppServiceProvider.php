<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use NoelDeMartin\LaravelCypress\Facades\Cypress;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Cypress::command('findModel', function (string $modelClass, int $id) {
            $modelClass = Cypress::resolveModelClass($modelClass);

            return $modelClass::find($id);
        });
    }
}
