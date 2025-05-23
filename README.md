# TaskAngular19

A reactive task management application built using Angular 19, Standalone Components, NgRx Signals Store, and Chart.js via ng2-charts

# Project Structure
This application is organized using a feature-based module structure with standalone components for maximum modularity and simplicity.

# Features

task-form/ – Form to create new tasks

task-table/ – Table to list and manage tasks

task-chart/ – Chart visualization of task data

store/task.store.ts – Central reactive state store using @ngrx/signals

services/task-compute.service.ts – Contains computed signals to derive task statistics

Core

core/models/task.model.ts – Contains the shared Task interface

# Signal Store Design

We used the new @ngrx/signals API for state management. Here's how:

State: Stored using withState() for a list of Task objects.

Methods: Encapsulated with withMethods() for add, update, and delete.

Patch Strategy: patchState() updates state immutably for simplicity and clarity.

Singleton Instance: The store is exported directly and used without injection.

This design enables reactive updates across the app with minimal boilerplate.

# Patterns Used

 computed()

Used in TaskComputeService to derive:

Status counts (Pending, In Progress, Completed)

Daily task creation trends

signal()

Used in chart components to:

Reactively bind chart data to state

Rerender automatically on state change

# Trade-offs & Alternatives

Design Decision

Alternatives

Rationale

@ngrx/signals store

Traditional NgRx, plain RxJS signals

computed() in services

Inline logic in components

Promotes separation of concerns and testability

Standalone components

Angular NgModules

Reduces boilerplate and improves tree-shakability

No signalEffect() used

Kept app simple and purely reactive via computed values

# Libraries Used

Angular 19

@ngrx/signals

Chart.js 4.4.9

ng2-charts 8.0.0

Note: Ensure chart types (e.g. 'bar', 'pie') and controllers are registered correctly in chart.ts setup if required.

# Summary

This project demonstrates how to build a reactive, modular, and modern Angular application using Signals as the core state management approach. With a clean separation of concerns, it is designed to be easy to extend and maintain.