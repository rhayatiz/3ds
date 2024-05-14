<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InscriptionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'nom' => $this->nom,
            'prenom' => $this->prenom,
            'telephone' => $this->telephone,
            'email' => $this->email,
            'organisation' => $this->organisation,
            'fonction' => $this->fonction,
            'organisationType' => $this->organisationType->label,
            'secteurActivite' => $this->secteurActivite->label,
            'isValidated' => $this->isValidated,
        ];
    }
}
