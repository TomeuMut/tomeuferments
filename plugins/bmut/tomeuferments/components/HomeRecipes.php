<?php namespace Bmut\Tomeuferments\Components;

use Bmut\Tomeuferments\Models\Recipes;
use Cms\Classes\ComponentBase;

/**
 * HomeRecipes Component
 *
 * @link https://docs.octobercms.com/3.x/extend/cms-components.html
 */
class HomeRecipes extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Home Recipes Component',
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
        $query->where('bmut_tomeuferments_tags.id', 4);
    })
    ->with('tags')
    ->orderBy('id')
    ->take(4)
    ->get();

    $this->page['recipes'] = $this->recipes = $recipes;
}

}
