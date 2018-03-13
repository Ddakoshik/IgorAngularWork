import { Component, OnInit, Input,  OnChanges} from '@angular/core';
import { FormControl , FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address, Hero, states} from '../data-models';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

  heroForm: FormGroup;
  states = states;

  @Input() hero: Hero;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  

  ngOnChanges() {
    this.rebuildForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      address: this.fb.group(new Address()), // <-- a FormGroup with a new address
      power: '',
      sidekick: ''
    });
  }
  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }
}