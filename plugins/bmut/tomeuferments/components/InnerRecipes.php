<?php namespace Bmut\Tomeuferments\Components;

use Bmut\Tomeuferments\Models\Recipes;
use Cms\Classes\ComponentBase;

/**
 * InnerRecipes Component
 *
 * @link https://docs.octobercms.com/3.x/extend/cms-components.html
 */
class InnerRecipes extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Inner Recipes Component',
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
        $recipe = Recipes::transWhere('slug', $this->param('slug'))->first();

        $this->page->title = $recipe->title;

        $this->page['recipe'] = $recipe;
    }
}
