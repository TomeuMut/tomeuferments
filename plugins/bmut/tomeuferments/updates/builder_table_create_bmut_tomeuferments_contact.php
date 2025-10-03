<?php namespace Bmut\Tomeuferments\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateBmutTomeufermentsContact extends Migration
{
    public function up()
    {
        Schema::create('bmut_tomeuferments_contact', function($table)
        {
            $table->increments('id')->unsigned();
            $table->string('name')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->boolean('legal')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('bmut_tomeuferments_contact');
    }
}
