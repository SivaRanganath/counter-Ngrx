// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { UserService } from './user.service';
// import { loadUsers, loadUsersSuccess, loadUsersFail } from './user.actions';
// import { catchError, map, mergeMap, of } from 'rxjs';

// @Injectable()
// export class UserEffects {
//   constructor(private actions$: Actions, private userService: UserService) {}

//   // Effect to load users
//   loadUsers$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadUsers), // 👈 Listen for the 'loadUsers' action
//       mergeMap(() =>
//         this.userService.getUsers().pipe(
//           map(users => loadUsersSuccess({ users })), // 👈 Dispatch success
//           catchError(error => of(loadUsersFail({ error: error.message }))) // 👈 Dispatch failure
//         )
//       )
//     )
//   );
// }