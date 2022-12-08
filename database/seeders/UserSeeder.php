<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Rafael Costa',
            'email' => 'rafael@midia12.com.br',
            'password' => Hash::make('172812m12'),
        ]);

        // $table->string('title');
        // $table->string('description')->nullable();
        // $table->string('visibility')->nullable();
        // $table->integer('order')->nullable();
        // $table->boolean('active')->nullable();
    }
}
