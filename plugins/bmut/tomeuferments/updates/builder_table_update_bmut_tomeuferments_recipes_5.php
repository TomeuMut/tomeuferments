<?php namespace Bmut\Tomeuferments\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateBmutTomeufermentsRecipes5 extends Migration
{
    public function up()
    {
        Schema::table('bmut_tomeuferments_recipes', function($table)
        {
            $table->boolean('is_active')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('bmut_tomeuferments_recipes', function($table)
        {
            $table->dropColumn('is_active');
        });
    }
}
