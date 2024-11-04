import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../model/category';
import { GameService } from '../../services/game.service';
import { Game } from '../../model/game';

@Component({
  selector: 'app-game-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css'], // Corrected typo here from styleUrl to styleUrls
})
export class GameAddComponent implements OnInit {
  private readonly gameService: GameService = inject(GameService);
  Games!: Game[];

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => (this.Games = data));
  }

  categories = Object.values(Category);

  gameForm = new FormGroup({
    id: new FormControl(1, {nonNullable:true}),
    name: new FormControl('Echec', {nonNullable:true}),
    price: new FormControl(46.3, {nonNullable:true}),
    madeIn: new FormControl('Tunisie', {nonNullable:true}),
    category: new FormControl(Category.BoardGames, {nonNullable:true}),
    isNew: new FormControl(true, {nonNullable:true}),
  });

  onSubmit() {

    this.gameService.addGame(this.gameForm.value as Game).subscribe(
      (res) => {
        console.log('Game added successfully:', res);
        this.Games.push(res);
      },
      (error) => {
        console.error('Error adding game:', error);
      }
    );
    this.gameForm.get('id')?.setValue(this.Games.length + 1);
  }

  onResetForm() {
    this.gameForm.reset();
    this.gameForm.get('id')?.setValue(this.Games.length + 1);
  }
}
