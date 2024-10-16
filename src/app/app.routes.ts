import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "experience",
        component: ExperienceComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/profile"
    },
    {
        path: "**",
        component: NotFoundComponent
    },
    
];
