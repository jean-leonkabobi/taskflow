import { Routes } from '@angular/router';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: KanbanBoardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];