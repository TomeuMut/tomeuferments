<?php namespace Bmut\Tomeuferments\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBmutTomeufermentsTags extends Migration
{
    public function up()
    {
        Schema::create('bmut_tomeuferments_tags', function($table)
        {
            $table->increments('id')->unsigned();
            $table->string('name', 255)->nullable();
            $table->string('slug')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bmut_tomeuferments_tags');
    }
}
