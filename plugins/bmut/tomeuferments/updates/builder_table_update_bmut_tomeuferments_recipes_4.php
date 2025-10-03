<?php namespace Bmut\Tomeuferments\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutTomeufermentsRecipes4 extends Migration
{
    public function up()
    {
        Schema::table('bmut_tomeuferments_recipes', function($table)
        {
            $table->string('capacity')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('bmut_tomeuferments_recipes', function($table)
        {
            $table->dropColumn('capacity');
        });
    }
}
