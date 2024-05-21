import { AgmCoreModule } from '@agm/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatTableExporterModule } from 'mat-table-exporter';
import { authInterceptorProviders } from 'src/@core/helpers/auth.interceptor';
import { MaterialModule } from '../material.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';
import { RolesLookupComponent } from './pages/AccessManagement/roles-management/roles-lookup/roles-lookup.component';
import { RolesMaintenanceComponent } from './pages/AccessManagement/roles-management/roles-maintenance/roles-maintenance.component';
import { RolesManagementComponent } from './pages/AccessManagement/roles-management/roles-management.component';
import { CreateUserComponent } from './pages/AccessManagement/user-management/create-user/create-user.component';
import { PassowrdResetComponent } from './pages/AccessManagement/user-management/passowrd-reset/passowrd-reset.component';
import { UpdateUserComponent } from './pages/AccessManagement/user-management/update-user/update-user.component';
import { UserManagementComponent } from './pages/AccessManagement/user-management/user-management.component';
import { UserProfileComponent } from './pages/AccessManagement/user-management/user-profile/user-profile.component';
import { WorkClassActionsMaintenanceComponent } from './pages/AccessManagement/work-class-actions/work-class-actions-maintenance/work-class-actions-maintenance.component';
import { WorkClassActionsComponent } from './pages/AccessManagement/work-class-actions/work-class-actions/work-class-actions.component';
import { WorkClassLookupComponent } from './pages/AccessManagement/work-class/work-class-lookup/work-class-lookup.component';
import { WorkClassMaintenanceComponent } from './pages/AccessManagement/work-class/work-class-maintenance/work-class-maintenance.component';
import { WorkClassComponent } from './pages/AccessManagement/work-class/work-class.component';
import { DynamicReportLookupComponent } from './pages/reports/dynamic-report-lookup/dynamic-report-lookup.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ViewReportComponent } from './pages/reports/view-report/view-report.component';
import { MainComponent } from './pages/main/main.component';
import { ReportIssueComponent } from './pages/report-issue/report-issue.component';
import { EscalateIssueComponent } from './pages/escalate-issue/escalate-issue.component';
import { SuggestIdeaComponent } from './pages/suggest-idea/suggest-idea.component';
import { KnowledgeBaseComponent } from './pages/knowledge-base/knowledge-base.component';
import { PriorityMaintenanceComponent } from './pages/Maintenance/priority-maintenance/priority-maintenance.component';
import { StatusMaintenanceComponent } from './pages/Maintenance/status-maintenance/status-maintenance.component';
import { CategoryMaintenanceComponent } from './pages/Maintenance/category-maintenance/category-maintenance.component';
import { FAQMaintenanceComponent } from './pages/Maintenance/faq-maintenance/faq-maintenance.component';
import { PriorityConfigComponent } from './pages/Configurations/priority-config/priority-config.component';
import { StatusConfigComponent } from './pages/Configurations/status-config/status-config.component';
import { CategoryConfigComponent } from './pages/Configurations/category-config/category-config.component';
import { FAQConfigComponent } from './pages/Configurations/faq-config/faq-config.component';
import { AllTicketsComponent } from './pages/System/all-tickets/all-tickets.component';
import { ViewTicketComponent } from './pages/System/all-tickets/view-ticket/view-ticket.component';
import { UserGuideComponent } from './pages/System/user-guide/user-guide.component';
import { SurveysComponent } from './pages/System/surveys/surveys.component';
import { DataInputManagementComponent } from './pages/System/all-tickets/data-input-management/data-input-management.component';
import { PriorityLookupComponent } from './pages/lookups/priority-lookup/priority-lookup.component';
import { FaqLookupComponent } from './pages/lookups/faq-lookup/faq-lookup.component';
import { StatusLookupComponent } from './pages/lookups/status-lookup/status-lookup.component';
import { ManageTicketLookupComponent } from './pages/lookups/manage-ticket-lookup/manage-ticket-lookup.component';
import { ManageTicketMaintenanceComponent } from './pages/System/all-tickets/manage-tickets/manage-ticket-maintenance/manage-ticket-maintenance.component'
import { CategoryLookupComponent } from './pages/lookups/category-lookup/category-lookup.component';
import { ManageTicketsComponent } from './pages/System/all-tickets/manage-tickets/manage-tickets.component';
import { AssigneeLookupComponent } from './pages/lookups/assignee-lookup/assignee-lookup.component';
import { AssigneeConfigComponent } from './pages/Configurations/assignee-config/assignee-config.component';
import { AssigneeMaintenanceComponent } from './pages/Maintenance/assignee-maintenance/assignee-maintenance.component';
import { TicketMaintenanceComponent } from './pages/Maintenance/ticket-maintenance/ticket-maintenance.component';
import { TicketLookupComponent } from './pages/lookups/ticket-lookup/ticket-lookup.component';
import { MyTicketsComponent } from './pages/System/all-tickets/my-tickets/my-tickets.component';
import { EscalateMaintenanceComponent } from './pages/Maintenance/escalate-maintenance/escalate-maintenance.component';
import { EscalateLookupComponent } from './pages/lookups/escalate-lookup/escalate-lookup.component';
import { SubsidaryLookupComponent } from './pages/lookups/subsidary-lookup/subsidary-lookup.component';


@NgModule({
  declarations: [
    PageError404Component,
    PageError500Component,
    AdministrationComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ReportsComponent,
    ViewReportComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserManagementComponent,
    WorkClassComponent,
    WorkClassMaintenanceComponent,
    WorkClassLookupComponent,
    RolesManagementComponent,
    RolesLookupComponent,
    RolesMaintenanceComponent,
    PassowrdResetComponent,
    WorkClassActionsComponent,
    WorkClassActionsMaintenanceComponent,
    UserProfileComponent,
    DynamicReportLookupComponent,
    MainComponent,
    ReportIssueComponent,
    ManageTicketLookupComponent,
    EscalateIssueComponent,
    SuggestIdeaComponent,
    KnowledgeBaseComponent,
    PriorityMaintenanceComponent,
    StatusMaintenanceComponent,
    CategoryMaintenanceComponent,
    FAQMaintenanceComponent,
    PriorityConfigComponent,
    StatusConfigComponent,
    CategoryConfigComponent,
    FAQConfigComponent,
    AllTicketsComponent,
    ViewTicketComponent,
    UserGuideComponent,
    SurveysComponent,
    DataInputManagementComponent,
    PriorityLookupComponent,
    FaqLookupComponent,
    StatusLookupComponent,
    CategoryLookupComponent,
    ManageTicketsComponent,
    ManageTicketLookupComponent,
    ManageTicketMaintenanceComponent,
    AssigneeLookupComponent,
    AssigneeConfigComponent,
    AssigneeMaintenanceComponent,
    TicketMaintenanceComponent,
    TicketLookupComponent,
    MyTicketsComponent,
    EscalateMaintenanceComponent,
    EscalateLookupComponent,
    SubsidaryLookupComponent,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  providers: [
    authInterceptorProviders,
    DatePipe,
  ],
  imports: [
    CommonModule,
    AgmCoreModule,
    AdministrationRoutingModule,
    DataTablesModule,
    RouterModule,
    HighchartsChartModule,
    MatTableExporterModule,
    MaterialModule,
  ],
})
export class AdministrationModule { }
