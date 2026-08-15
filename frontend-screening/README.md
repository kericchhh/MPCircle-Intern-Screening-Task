# MPCircle Student Dashboard

## Live Demo

mpcirclescreening.netlify.app

## Overview

A responsive student dashboard built as part of the MPCircle Frontend Developer Intern screening task.
The application allows students to authenticate and view academic information including courses, assignments, attendance, GPA, and course progress.

## Features

- Login with form validation(Use any email from provided mockAPI)
- Loading and error states
- Protected routes
- Student dashboard
- Course progress tracking
- Assignment tracking
- Responsive mobile, tablet, and desktop layouts
- Accessible navigation and forms

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack React Query
- React Hook Form
- Zod
- React Router

## Technical Decisions

### React Query

React Query manages API and asynchronous mock data, including loading and error states.
This keeps server state separate from local UI state.

### Mock API Boundary

DummyJSON provides student information, while course and assignment statistics are provided through asynchronous mock services.
The components do not depend directly on where the data originates, so these services could later be replaced with real API endpoints.

### State Management

Redux was intentionally not added.
The application has a small amount of client-side global state, which is handled by React Context. Server state is handled by React Query.
Adding Redux would increase complexity without providing significant value for the current scope.

### Reusable Components

Repeated interface elements such as statistic cards, course cards, skeletons, and shared layouts are implemented as reusable components.

## Assumptions

- DummyJSON represents the student/user data source.
- Courses and assignments are mocked because the provided API does not expose them.
- Authentication is simulated and is not intended to represent secure production authentication.
- GPA uses a 5.0 scale.
- Attendance is represented as a percentage.
- Course progress ranges between 0 and 100.

## Product Improvements

If this dashboard were used by 50,000 students, I would prioritize the following improvements.

### 1. Assignment Notifications and Reminders

#### Why it matters

Students may not open the dashboard every day, which means simply displaying an upcoming assignment is not always enough to prevent missed deadlines.
Proactive reminders would help students stay aware of important coursework and reduce missed submissions.

#### How I would implement it

I would add notification preferences that allow students to choose when they want to be reminded, for example:

- 7 days before a deadline
- 24 hours before a deadline
- When an assignment becomes overdue

Notifications could be delivered through email, push notifications, or in-app notifications.
On the backend, assignment deadlines could be processed by a scheduled job or message queue. Notification jobs could then be sent asynchronously instead of being processed during normal API requests.

#### Trade-offs

This introduces additional backend infrastructure and operational complexity.
At a scale of 50,000 students, notification delivery also needs rate limiting, retry handling, and monitoring.
There is also a risk of notification fatigue, so students should be able to customize their preferences.

---

## 2. Search and Filter for Courses and Assignments

### Why it matters

As students get more courses and assignments, it becomes harder to quickly find what they need.
A simple search and filter system would make the dashboard easier to use.

### How I would implement it

I would add:

* A search input
* Filtering by assignment status
* Filtering by priority
* Filtering courses by status

For example, students could choose to view only:

* Overdue assignments
* High-priority assignments
* Active courses

For smaller datasets, filtering could be handled on the frontend. For larger datasets, filtering should be handled by the backend API.

### Trade-offs

This introduces more UI state and makes the interface slightly more complex.
For larger datasets, backend filtering would also require additional API support.

---

## 3. Assignment Submission Tracking

### Why it matters

Students need to clearly know whether an assignment has been submitted or is still pending.
This reduces confusion and makes the assignments page more useful.

### How I would implement it

Each assignment would have a clear status such as:

* Pending
* Submitted
* Overdue

For submitted assignments, I would also display the submission date.
In a larger version of the product, students could also upload their work directly from the assignment page.

### Trade-offs

Actual file uploads would require backend storage, file validation, upload limits, and security checks.
This would also make the assignment system more complex than simply displaying assignment information.
