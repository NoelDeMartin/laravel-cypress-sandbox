<?php

namespace App\Providers;

use Exception;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class CypressServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any package services.
     *
     * @return void
     */
    public function boot()
    {
        Route::namespace('App\Http\Controllers')
            ->middleware('web')
            ->group(function () {
                Route::get('/_cypress/setup', 'CypressController@setup');
                Route::get('/_cypress/csrf_token', 'CypressController@csrfToken');
                Route::post('/_cypress/create_models', 'CypressController@createModels');
            });
    }

    /**
     * Register any package services.
     *
     * @return void
     * @throws \Exception
     */
    public function register()
    {
        if ($this->app->environment('production')) {
            throw new Exception('It is unsafe to run Cypress in production.');
        }
    }
}
