import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateModuleGuard } from 'src/@core/helpers/CanActivateModule.guard';
import { AdministrationComponent } from './administration.component';
import { MainComponent } from './pages/main/main.component';
import { ReportIssueComponent } from './pages/report-issue/report-issue.component';
import { EscalateIssueComponent } from './pages/escalate-issue/escalate-issue.component';
import { SuggestIdeaComponent } from './pages/suggest-idea/suggest-idea.component';
import { KnowledgeBaseComponent } from './pages/knowledge-base/knowledge-base.component';
import { CategoryMaintenanceComponent } from './pages/Maintenance/category-maintenance/category-maintenance.component';
import { StatusMaintenanceComponent } from './pages/Maintenance/status-maintenance/status-maintenance.component';
import { PriorityMaintenanceComponent } from './pages/Maintenance/priority-maintenance/priority-maintenance.component';
import { FAQMaintenanceComponent } from './pages/Maintenance/faq-maintenance/faq-maintenance.component';
import { CategoryConfigComponent } from './pages/Configurations/category-config/category-config.component';
import { PriorityConfigComponent } from './pages/Configurations/priority-config/priority-config.component';
import { StatusConfigComponent } from './pages/Configurations/status-config/status-config.component';
import { FAQConfigComponent } from './pages/Configurations/faq-config/faq-config.component';
import { ViewReportComponent } from './pages/reports/view-report/view-report.component';
import { AllTicketsComponent } from './pages/System/all-tickets/all-tickets.component';
import { ViewTicketComponent } from './pages/System/all-tickets/view-ticket/view-ticket.component';
import { UserGuideComponent } from './pages/System/user-guide/user-guide.component';
import { SurveysComponent } from './pages/System/surveys/surveys.component';
import { AssignTicketComponent } from './pages/System/all-tickets/assign-ticket/assign-ticket.component';
import { ManageTicketsComponent } from './pages/System/all-tickets/manage-tickets/manage-tickets.component';
import { RolesManagementComponent } from './pages/AccessManagement/roles-management/roles-management.component';
import { RolesMaintenanceComponent } from './pages/AccessManagement/roles-management/roles-maintenance/roles-maintenance.component';
import { WorkClassActionsComponent } from './pages/AccessManagement/work-class-actions/work-class-actions/work-class-actions.component';
import { WorkClassActionsMaintenanceComponent } from './pages/AccessManagement/work-class-actions/work-class-actions-maintenance/work-class-actions-maintenance.component';
import { WorkClassComponent } from './pages/AccessManagement/work-class/work-class.component';
import { WorkClassMaintenanceComponent } from './pages/AccessManagement/work-class/work-class-maintenance/work-class-maintenance.component';
import { CreateUserComponent } from './pages/AccessManagement/user-management/create-user/create-user.component';
import { UpdateUserComponent } from './pages/AccessManagement/user-management/update-user/update-user.component';
import { UserProfileComponent } from './pages/AccessManagement/user-management/user-profile/user-profile.component';
import { UserManagementComponent } from './pages/AccessManagement/user-management/user-management.component';
import { AssigneeMaintenanceComponent } from './pages/Maintenance/assignee-maintenance/assignee-maintenance.component';
import { AssigneeConfigComponent } from './pages/Configurations/assignee-config/assignee-config.component';
import { ManageTicketMaintenanceComponent } from './pages/System/all-tickets/manage-tickets/manage-ticket-maintenance/manage-ticket-maintenance.component';
import { TicketMaintenanceComponent } from './pages/Maintenance/ticket-maintenance/ticket-maintenance.component';
import { MyTicketsComponent } from './pages/System/all-tickets/my-tickets/my-tickets.component';
import { EscalateMaintenanceComponent } from './pages/Maintenance/escalate-maintenance/escalate-maintenance.component';


const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'DASHBOARD', preload: true },
      },
      {
        path: 'report-issue',
        component: ReportIssueComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'report/maintenance',
        component: TicketMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'escalate-issue',
        component: EscalateIssueComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'escalate/maintenance',
        component: EscalateMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'suggest-idea',
        component: SuggestIdeaComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'knowledge-base',
        component: KnowledgeBaseComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'category/maintenance',
        component: CategoryMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'category/data/view',
        component: CategoryConfigComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'priority/maintenance',
        component: PriorityMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'priority/data/view',
        component: PriorityConfigComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'status/maintenance',
        component: StatusMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'status/data/view',
        component: StatusConfigComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'faq/maintenance',
        component: FAQMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'faq/data/view',
        component: FAQConfigComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'assignee/maintenance',
        component: AssigneeMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'assignee/data/view',
        component: AssigneeConfigComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'CONFIGURATIONS', preload: true }
      },
      {
        path: 'view-report',
        component: ViewReportComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'REPORTS', preload: true }
      },
      {
        path: 'all-ticket',
        component: AllTicketsComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'REPORTS', preload: true }
      },
      {
        path: 'view-ticket',
        component: ViewTicketComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'REPORTS', preload: true }
      },
      {
        path: 'assign-ticket',
        component: AssignTicketComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'REPORTS', preload: true }
      },
      {
        path: 'manage-ticket',
        component: ManageTicketsComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'REPORTS', preload: true }
      },
      {
        path: 'my-ticket',
        component: MyTicketsComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'REPORTS', preload: true }
      },
      {
        path: 'user-guide',
        component: UserGuideComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'REPORTS', preload: true }
      },
      {
        path: 'survey',
        component: SurveysComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'REPORTS', preload: true }
      },
      {
        path: 'workclass/maintenance',
        component: WorkClassMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
      {
        path: 'workclass/data/view',
        component: WorkClassComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
      // WORK CLASS ACTION MANAGEMENT
      {
        path: 'workclassactions/maintenance',
        component: WorkClassActionsMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
      {
        path: 'workclassactions/data/view',
        component: WorkClassActionsComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },

      {
        path: 'roles/maintenance',
        component: RolesMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },

      {
        path: 'manage-ticket/manage-ticket-maintenance',
        component: ManageTicketMaintenanceComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
      {
        path: 'roles/data/view',
        component: RolesManagementComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
      {
        path: 'manage/user',
        component: UserManagementComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
      {
        path: 'manage/user/create',
        component: CreateUserComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
      {
        path: 'manage/user/update',
        component: UpdateUserComponent,
        canActivate: [CanActivateModuleGuard],
        data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
      {
        path: 'manage/user/profile',
        component: UserProfileComponent,
        // canActivate: [CanActivateModuleGuard],
        // data: { permission: 'ACCESS MANAGEMENT', preload: true }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule { }