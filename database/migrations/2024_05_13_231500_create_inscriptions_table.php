<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('email');
            $table->string('telephone');
            $table->string('fonction');
            $table->string('organisation');
            $table->string('password');
            $table->boolean('is_subscribed_newsletter')->default(0);
            $table->boolean('has_agreed_commercial_use')->default(0);
            $table->boolean('is_validated')->default(0);

            $table->unsignedBigInteger('organisation_type_id');
            $table->foreign('organisation_type_id')->references('id')->on('organisation_types');

            $table->unsignedBigInteger('secteur_activite_id');
            $table->foreign('secteur_activite_id')->references('id')->on('secteurs_activite');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inscriptions');
    }
};
