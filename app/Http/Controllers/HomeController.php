<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrganisationTypeCollection;
use App\Http\Resources\SecteurActiviteCollection;
use App\Models\OrganisationType;
use App\Models\SecteurActivite;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $organisationTypes = new OrganisationTypeCollection(OrganisationType::all());
        $secteursActivite = new SecteurActiviteCollection(SecteurActivite::all());

        return Inertia::render('Home', [
            'organisationTypes' => $organisationTypes,
            'secteursActivite' => $secteursActivite
        ]);
    }
}
