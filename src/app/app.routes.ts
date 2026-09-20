import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { AuditsComponent } from './feature/audits/audits.component';
import { AccountsComponent } from './feature/accounts/accounts.component';
import { SamplingComponent } from './feature/sampling/sampling.component';
import { DocumentsComponent } from './feature/documents/documents.component';
import { FindingsComponent } from './feature/findings/findings.component';
import { AnalyticsComponent } from './feature/analytics/analytics.component';
import { AiAssistantComponent } from './feature/ai-assistant/ai-assistant.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { authGuard } from './feature/auth/auth.guard';

export const routes: Routes = [
    {
  path: 'login',
  component: LoginComponent
},
 {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'audits',
    component: AuditsComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'sampling',
    component: SamplingComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'findings',
    component: FindingsComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'ai-assistant',
    component: AiAssistantComponent
  }
]

}

];
