import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SHARED_MODULES } from '../shared/shared-modules';
import { Bars } from '@primeicons/angular/bars';

@Component({
  imports: [...SHARED_MODULES, RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
