<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use NoelDeMartin\LaravelCypress\Facades\Cypress;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Schema::defaultStringLength(191);
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
