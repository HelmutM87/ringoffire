// export class Game {
//     public players: string[] = [];
//     public stack: string[] = [];
//     public playedCards: string[] = [];
//     public currentPlayer: number = 0;

//     constructor(){
//         for (let i = 1; i < 14; i++) {
//             this.stack.push('ace_' + i);
//             this.stack.push('hearts_' + i);
//             this.stack.push('clubs_' + i);
//             this.stack.push('diamonds_' + i);
//         }

//         shuffle(this.stack);

//     }
// }


export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor(){
        console.log('Initializing stack...');
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('heart_' + i);
            this.stack.push('club_' + i);
            this.stack.push('diamond_' + i);
        }
    
        console.log('Stack before shuffle:', this.stack);
        this.shuffle(this.stack);
        console.log('Stack after shuffle:', this.stack);
    }

    shuffle(array: string[]): void {
        let currentIndex = array.length;

        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
    }
}
