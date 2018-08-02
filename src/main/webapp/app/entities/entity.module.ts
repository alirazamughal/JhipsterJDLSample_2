import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HrmRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { HrmCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { HrmLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { HrmDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { HrmTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { HrmEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { HrmJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { HrmJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        HrmRegionMySuffixModule,
        HrmCountryMySuffixModule,
        HrmLocationMySuffixModule,
        HrmDepartmentMySuffixModule,
        HrmTaskMySuffixModule,
        HrmEmployeeMySuffixModule,
        HrmJobMySuffixModule,
        HrmJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HrmEntityModule {}
