<?php namespace Bmut\Tomeuferments\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutTomeufermentsRecipes extends Migration
{
    public function up()
    {
        Schema::rename('bmut_tomeuferments_recipe', 'bmut_tomeuferments_recipes');
    }
    
    public function down()
    {
        Schema::rename('bmut_tomeuferments_recipes', 'bmut_tomeuferments_recipe');
    }
}
