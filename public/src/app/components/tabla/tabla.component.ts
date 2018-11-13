import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  nombre: string;
  position: number;
  pass: string;
  aing: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'ECaldera', pass: '10079', aing: 2013},
  {position: 2, nombre: 'AParada', pass: '40026', aing: 2013},
  {position: 3, nombre: 'BKlobertanz', pass: '6941', aing: 2014},
  {position: 4, nombre: 'KMarca', pass: '90122', aing: 2016},
  {position: 5, nombre: 'CRojas', pass: '10811', aing: 2017},
  {position: 6, nombre: 'HQuispe', pass: '120107', aing: 2005},
  {position: 7, nombre: 'MBurgos', pass: '140067', aing: 2010}
];

/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'pass', 'aing'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  }


