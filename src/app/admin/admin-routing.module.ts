import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./appointment/appointment.module').then(
        (m) => m.AppointmentModule
      ),
  },
  {
    path: 'insurance',
    loadChildren: () =>
      import('./insurance/insurance/insurance.module').then(
        (m) => m.InsuranceModule
      ),
  },

  {
    path: 'doctors',
    loadChildren: () =>
      import('./doctors/doctors.module').then((m) => m.DoctorsModule),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('./billing/billing.module').then((m) => m.BillingModule),
  },
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then((m) => m.RoomModule),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./inventory/inventory.module').then((m) => m.InventoryModule),
  },
  {
    path: 'records',
    loadChildren: () =>
      import('./records/records.module').then((m) => m.RecordsModule),
  },
  {
    path: 'ambulance',
    loadChildren: () =>
      import('./ambulance/ambulance.module').then((m) => m.AmbulanceModule),
  },
  {
    path: 'pharmacy',
    loadChildren: () =>
      import('./pharmacy/pharmacy.module').then((m) => m.PharmacyModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./user-acc/user-acc.module').then((m) => m.UserAccModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
