<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInscriptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nom' => 'required|max:255',
            'prenom' => 'required|max:255',
            'telephone' => 'required|max:255',
            'email' => 'email|unique:inscriptions',
            'fonction' => 'required|max:255',
            'organisation' => 'required|max:255',
            'organisation_type_id' => 'required|max:255',
            'secteur_activite_id' => 'required|max:255',
            'password' => 'required|max:255',
        ];
    }

    public function messages() 
    {
        return [
            'email' => "Cet email est déjà utilisé"
        ];
    }
}
