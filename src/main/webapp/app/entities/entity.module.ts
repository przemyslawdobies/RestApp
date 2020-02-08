import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'driver',
        loadChildren: () => import('./driver/driver.module').then(m => m.RestAppDriverModule)
      },
      {
        path: 'car',
        loadChildren: () => import('./car/car.module').then(m => m.RestAppCarModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class RestAppEntityModule {}
