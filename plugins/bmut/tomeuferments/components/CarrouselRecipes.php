<?php namespace Bmut\Tomeuferments\Components;

use Bmut\Tomeuferments\Models\Recipes;
use Cms\Classes\ComponentBase;

/**
 * CarrouselRecipes Component
 *
 * @link https://docs.octobercms.com/3.x/extend/cms-components.html
 */
class CarrouselRecipes extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Carrousel Recipes Component',
            'description' => 'No description provided yet...'
        ];
    }

    /**
     * @link https://docs.octobercms.com/3.x/element/inspector-types.html
     */
    public function defineProperties()
    {
        return [];
    }

     public function onRun()
    {
        $recipes = Recipes::whereHas('tags', function($query) {
            $query->where('bmut_tomeuferments_tags.id', 3); // 👈 Usa el nombre completo de la tabla aquí
        })
        ->with('tags')
        ->orderBy('bmut_tomeuferments_recipes.id') // 👈 También aquí, por seguridad
        ->take(4)
        ->get();

        $this->page['recipes'] = $this->recipes = $recipes;
    }
}
