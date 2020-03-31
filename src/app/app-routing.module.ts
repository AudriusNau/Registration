import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ],
  exports: [RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ]
})
export class AppRoutingModule { }
