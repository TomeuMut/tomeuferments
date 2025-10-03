<?php namespace Bmut\Tomeuferments\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutTomeufermentsRecipes3 extends Migration
{
    public function up()
    {
        Schema::table('bmut_tomeuferments_recipes', function($table)
        {
            $table->string('slug')->nullable();
            $table->string('alcohol')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('bmut_tomeuferments_recipes', function($table)
        {
            $table->dropColumn('slug');
            $table->dropColumn('alcohol');
        });
    }
}
