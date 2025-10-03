<?php namespace Bmut\Tomeuferments\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBmutTomeufermentsRecipe extends Migration
{
    public function up()
    {
        Schema::create('bmut_tomeuferments_recipe', function($table)
        {
            $table->increments('id')->unsigned();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->text('introduction')->nullable();
            $table->text('tools')->nullable();
            $table->text('ingredients')->nullable();
            $table->text('steps')->nullable();
            $table->text('additional_info')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bmut_tomeuferments_recipe');
    }
}
