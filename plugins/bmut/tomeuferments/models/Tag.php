<?php namespace Bmut\Tomeuferments\Models;

use Model;
use Illuminate\Support\Str;

/**
 * Model
 */
class Tag extends Model
{
    use \October\Rain\Database\Traits\Validation;
    use \October\Rain\Database\Traits\Sluggable;

    public $implement = ['RainLab.Translate.Behaviors.TranslatableModel'];

    protected $slugs = ['slug' => 'name'];
    /**
     * @var bool timestamps are disabled.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /**
     * @var string table in the database used by the model.
     */
    public $table = 'bmut_tomeuferments_tags';

    /**
     * @var array rules for validation.
     */
    public $rules = [
    ];

    public $translatable = ['name',['slug', 'index' => true ]];


    public $hasMany = [
        'recipes' => Recipes::class,
    ];

    public function beforeSave(){
        $this->slug = Str::slug($this->name);
    }

    public function beforeUpdate()
    {
        $this->slug = Str::slug($this->name);
    }

}
