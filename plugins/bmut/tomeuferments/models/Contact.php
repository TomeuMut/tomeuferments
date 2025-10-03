<?php namespace Bmut\Tomeuferments\Models;

use Model;

/**
 * Model
 */
class Contact extends Model
{
    use \October\Rain\Database\Traits\Validation;


    /**
     * @var string table in the database used by the model.
     */
    public $table = 'bmut_tomeuferments_contact';

    /**
     * @var array rules for validation.
     */
    public $rules = [
    ];

    public $fillable = ['name','email','phone','legal'];

}
