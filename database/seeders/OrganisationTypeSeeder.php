<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrganisationTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('organisation_types')->insert([
            ['label' => 'Administration publique'],
            ['label' => 'Organisation à but lucratif'],
            ['label' => 'Organisation à but non lucratif']
        ]);
    }
}
