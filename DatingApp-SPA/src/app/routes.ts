import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'members', component: MemberListComponent, canActivate: [AuthGuard], resolve: {users: MemberListResolver}},
    {path: 'members/:id', component: MemberDetailComponent, canActivate: [AuthGuard], resolve: {user: MemberDetailResolver}},
    {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
    {path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
