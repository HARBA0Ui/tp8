import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../model/category';

@Component({
  selector: 'app-game-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './game-add.component.html',
  styleUrl: './game-add.component.css',
})
export class GameAddComponent {
  categories = Object.values(Category);
  gameForm = new FormGroup({
    id: new FormControl(10),
    name: new FormControl('test'),
    price: new FormControl(0),
    categories: new FormControl(Category),
    isNew: new FormControl(false),
  });

  onSubmit() {
    console.log(this.gameForm.get('id')?.value);
  }
}
