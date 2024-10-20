<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Feedbacks/Index', [
            'feedbacks' => Feedback::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $request->user()->feedbacks()->create($validated);

        return redirect(route('feedbacks.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback): RedirectResponse
    {
        Gate::authorize('update', $feedback);
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);
        $feedback->update($validated);
        return redirect(route('feedbacks.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback): RedirectResponse
    {
        Gate::authorize('delete', $feedback);
        $feedback->delete();
        return redirect(route('feedbacks.index'));
    }
}
