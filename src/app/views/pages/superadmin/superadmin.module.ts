// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Metronic
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import { SuperadminComponent } from './superadmin.component';
import { CompanyCreationComponent } from './company-creation/company-creation.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
	declarations: [
		SuperadminComponent,
		CompanyCreationComponent,
		
	],
	imports: [
		CommonModule,
		FormsModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: SuperadminComponent,
				children: [
					{
						path: 'company-creation',
						component: CompanyCreationComponent,
					},
				
				],
			},
		]),
		MatSelectModule,
		MatInputModule,
		InlineSVGModule,
	],
})
export class SuperadminModule {
}
