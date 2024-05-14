<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Inscription extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'prenom', 
        'nom', 
        'email', 
        'telephone', 
        'fonction', 
        'organisation', 
        'password', 
        'organisation_type_id' , 
        'secteur_activite_id',
        'has_agreed_commercial_use',
        'is_subscribed_newsletter',
        'is_validated',
    ];
    public $timestamps = false;

    public function organisationType(): BelongsTo
    {
        return $this->belongsTo(OrganisationType::class);
    }

    public function secteurActivite(): BelongsTo
    {
        return $this->belongsTo(SecteurActivite::class);
    }

}
