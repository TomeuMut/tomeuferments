<?php namespace Bmut\Tomeuferments;

use System\Classes\PluginBase;

/**
 * Plugin class
 */
class Plugin extends PluginBase
{
    /**
     * register method, called when the plugin is first registered.
     */
    public function register()
    {
    }

    /**
     * boot method, called right before the request route.
     */
    public function boot()
    {
    }

    /**
     * registerComponents used by the frontend.
     */
    public function registerComponents()
    {
        return [
            'Bmut\Tomeuferments\Components\ContactForm' => 'ContactForm',
            'Bmut\Tomeuferments\Components\ListRecipes' => 'ListRecipes',
            'Bmut\Tomeuferments\Components\InnerRecipes' => 'InnerRecipes',
            'Bmut\Tomeuferments\Components\HomeRecipes' => 'HomeRecipes',
            'Bmut\Tomeuferments\Components\CarrouselRecipes' => 'CarrouselRecipes',
        ];
    }

    /**
     * registerSettings used by the backend.
     */
    public function registerSettings()
    {
    }
}
