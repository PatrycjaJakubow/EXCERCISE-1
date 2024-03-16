import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretComponent } from './secret/secret.component';
import { SecretGuard } from './secret-guard.guard';

const routes: Routes = [
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [SecretGuard], // Attach the guard to the route
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
