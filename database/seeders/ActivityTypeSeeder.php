<?php

namespace Database\Seeders;

use App\Models\ActivityType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ActivityTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ActivityType::create([
            'title' => '00 - JORNADA DE TRABALHO',
            'visibility' => 0,
            'image' => 'image.jpg',
            'order' => 10,
            'active' => 1,
        ]);
        ActivityType::create([
            'title' => '01 - ANALISE DE PDV',
            'visibility' => 0,
            'image' => 'image.jpg',
            'order' => 10,
            'active' => 1,
        ]);
        ActivityType::create([
            'title' => '02 - MR EMBALAGENS',
            'visibility' => 0,
            'image' => 'image.jpg',
            'order' => 10,
            'active' => 1,
        ]);
        ActivityType::create([
            'title' => 'ATENDIMENTO DE LOCACAO',
            'visibility' => 0,
            'image' => 'image.jpg',
            'order' => 10,
            'active' => 1,
        ]);
        ActivityType::create([
            'title' => 'ATIVIDADE DE ENTREGA',
            'visibility' => 0,
            'image' => 'image.jpg',
            'order' => 10,
            'active' => 1,
        ]);
        ActivityType::create([
            'title' => 'ATIVIDADE PADRÃO',
            'visibility' => 0,
            'image' => 'image.jpg',
            'order' => 10,
            'active' => 1,
        ]);
    }
}
