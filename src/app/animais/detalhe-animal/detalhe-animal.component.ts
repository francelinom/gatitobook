import { AnimaisService } from './../animais.service';
import { Animal } from './../animais';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRouter.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }
}
