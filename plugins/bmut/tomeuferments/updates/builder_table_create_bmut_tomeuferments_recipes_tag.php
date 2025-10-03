<?php namespace Bmut\Tomeuferments\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBmutTomeufermentsRecipesTag extends Migration
{
    public function up()
    {
        Schema::create('bmut_tomeuferments_recipes_tag', function($table)
        {
            $table->increments('id')->unsigned();
            $table->integer('recipes_id')->nullable();
            $table->integer('tag_id')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bmut_tomeuferments_recipes_tag');
    }
}
