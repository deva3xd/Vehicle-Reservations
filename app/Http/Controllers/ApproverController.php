<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ApproverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke()
    {
        return Inertia::render('Dashboard');
    }
}
