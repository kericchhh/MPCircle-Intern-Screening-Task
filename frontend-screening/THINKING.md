# Engineering Reflection

## 1. What assumptions did you make?

I assumed the provided DummyJSON API would mainly be used as a source of student/user data, since it does not provide course, assignment, attendance, or GPA information.
Because of that, I created asynchronous mock service functions for courses, and assignments. 

I also assumed:

- GPA is measured on a 5.0 scale.
- Attendance is represented as a percentage.
- Authentication is simulated rather than production-ready.
- Course progress is represented as a percentage between 0 and 100.

## 2. What was the hardest part?

Learning how React Query separates server state from local application state was a challenge, but it resulted in cleaner loading and error handling.

## 3. If you had another week, what would you improve?

I would improve the application in several areas:

- Replace the mock authentication flow with a real authentication API.
- Add more detailed loading skeletons and empty states.
- Add filtering and sorting for assignments and courses.
- Improve the mobile navigation experience.
- Improve accessibility.

## 4. What would you refactor first?

I would first refactor repeated query-state UI such as loading, error, and empty states into reusable components.
As the project becomes larger, I would consider grouping code by feature rather than only by technical category.

For example:

src/features/courses/
src/features/assignments/
src/features/auth/

This would make related components, types, hooks, and services easier to locate.

## 5. What AI tools did you use, and how did they help?

I used ChatGPT as a development assistant during the project.

I mainly used it to:

- Discuss project architecture and folder structure.
- Learn React Query concepts such as queries and mutations.
- Review approaches for responsive layouts.
- Help reason about error and loading states.

Using AI was most useful as a learning and review tool rather than as a replacement for understanding the implementation.

## 6. What did you deliberately choose not to build, and why?

I deliberately chose not to build a production authentication system because the task does not provide a backend authentication service.
The current authentication state is therefore simulated for demonstration purposes.
I also chose not to add Redux because the amount of client-side global state in this application does not justify the additional complexity. React Context is sufficient for authentication state, while React Query manages server state.
My priority was to fully implement the required student experience with good structure, responsiveness, accessibility, loading states, and error handling within the available time.
