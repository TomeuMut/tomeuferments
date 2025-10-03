<?php namespace Bmut\Tomeuferments\Components;

use Bmut\Tomeuferments\Models\Recipes;
use Bmut\Tomeuferments\Models\Tag;
use Cms\Classes\ComponentBase;

/**
 * ListRecipes Component
 *
 * @link https://docs.octobercms.com/3.x/extend/cms-components.html
 */
class ListRecipes extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'List Recipes Component',
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
        $recipes = Recipes::orderBy('id')->with('tags')->where('is_active', true)->get();
        $tags = Tag::get();
        $this->page['recipes'] = $this->recipes = $recipes;
        $this->page['tags'] = $this->tags = $tags;
    }
}
