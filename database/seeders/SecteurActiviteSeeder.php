<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SecteurActiviteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('secteurs_activite')->insert([
            ['label' => 'Agroalimentaire'],
            ['label' => 'Banque'],
            ['label' => 'Chimie'],
            ['label' => 'Etude et conseil'],
            ['label' => 'Logistique'],
            ['label' => 'Immobilier']
        ]);
    }
}
