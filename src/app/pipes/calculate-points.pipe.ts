import { Pipe, PipeTransform } from '@angular/core';
import { IPlayer } from '../models/player.interface';

@Pipe({
  name: 'calculatePoints',
})

export class CalculatePointsPipe implements PipeTransform {
  transform(player: IPlayer, ...args: unknown[]): string {
    let totalPoints: number = 0;

    player.points.forEach((point: number) => {
      totalPoints += point;
    });

    return `${player.name} has ${totalPoints} points`;
  }
}
