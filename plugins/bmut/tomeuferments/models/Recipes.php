<?php namespace Bmut\Tomeuferments\Models;

use Model;
use Illuminate\Support\Str;

/**
 * Model
 */
class Recipes extends Model
{
    use \October\Rain\Database\Traits\Validation;
    use \October\Rain\Database\Traits\Sluggable;

    protected $slugs = ['slug' => 'title'];

    /**
     * @var string table in the database used by the model.
     */
    public $table = 'bmut_tomeuferments_recipes';

    /**
     * @var array rules for validation.
     */
    public $rules = [
    ];

    public $translatable = ['title','description',['slug', 'index' => true ],'introduction','tools','steps','aditional_info'];

    public $attachOne = [
        'img_featured' => \System\Models\File::class,
        'img_one' => \System\Models\File::class,
        'img_two' => \System\Models\File::class,
        'img_three' => \System\Models\File::class,
    ];
    public $attachMany = [
        'img_gallery' => \System\Models\File::class,
    ];

    public $implement = ['RainLab.Translate.Behaviors.TranslatableModel'];

    public $belongsToMany = [
        'tags' => [
            Tag::class,
            'table' => 'bmut_tomeuferments_recipes_tag',
        ],
    ];

    public function beforeSave(){
        $this->slug = Str::slug($this->title .'-'. $this->subtitle);
    }

    public function beforeUpdate()
    {
        $this->slug = Str::slug($this->title .'-'. $this->subtitle);
    }

}
