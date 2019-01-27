import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'members', component: MemberListComponent, canActivate: [AuthGuard], resolve: {users: MemberListResolver}},
    {path: 'members/:id', component: MemberDetailComponent, canActivate: [AuthGuard], resolve: {user: MemberDetailResolver}},
    {path: 'member/edit', component: MemberEditComponent,
        canActivate: [AuthGuard], canDeactivate: [PreventUnsavedChanges], resolve: {user: MemberEditResolver}},
    {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
    {path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
