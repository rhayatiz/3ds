<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInscriptionRequest;
use App\Http\Resources\InscriptionCollection;
use App\Models\Inscription;
use App\Models\OrganisationType;
use App\Models\SecteurActivite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class InscriptionController extends Controller
{
    public function store(StoreInscriptionRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($request->password);
        Inscription::create($data);
        return to_route('home');
    }

    public function index()
    {
        $inscriptions = new InscriptionCollection(Inscription::all());

        return Inertia::render('Inscriptions', [
            'inscriptions' => $inscriptions
        ]);
    }
}
