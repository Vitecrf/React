import {getRandomMatrix} from "../util/random";
function fromAlive(nLives: number): number {
    return +(nLives === 2 || nLives === 3);//to 1 only if the condition true
}
function fromDead(nLives: number): number {
    return +(nLives === 3);//to 1 only if the condition true
}
export default class LifeMatrix{
    constructor(private _numbers: number[][]) {
    }
    get numbers(){
        return this._numbers;
    }

    nextStep():number[][]{
        // let arr:number[][] = [...this._numbers]  ????? мутирует
        let arr:number[][] = JSON.parse(JSON.stringify(this.numbers));

        this._numbers = this._numIsLands(arr);
        console.log(this._numbers);
        return this._numbers;
    }

    private _numIsLands(arr:number[][]):number[][]{
        let counter:number = 0;

        for(let r:number = 0; r < this.numbers.length; r++){
            for(let c:number = 0; c < this.numbers[r].length; c++){
                if(this.numbers[r][c] === 1){
                    // console.log(counter)
                    counter = this._countNeighbour(this.numbers, r, c);
                    this._markNeighbour(counter, arr, r, c);
                }
                else if(this.numbers[r][c] === 0){
                    counter = 0;
                    counter = this._countNeighbour(this.numbers, r, c);
                    if(counter == 3){arr[r][c] = 1}
                }
            }
        }
        return arr;
    }

    private _countNeighbour(grid:number[][], r:number, c:number):number{
        let sum:number = 0;
        if(grid[r][c-1]===1){sum += 1}
        if(grid[r][c+1]===1){sum += 1}
        if(grid?.[r-1]?.[c]===1){sum += 1}
        if(grid?.[r+1]?.[c]===1){sum += 1}
        if(grid?.[r-1]?.[c-1]===1){sum += 1}
        if(grid?.[r-1]?.[c+1]===1){sum += 1}
        if(grid?.[r+1]?.[c-1]===1){sum += 1}
        if(grid?.[r+1]?.[c+1]===1){sum += 1}
        return sum;
    }

    private _markNeighbour(neighbour:number, arr:number[][], r:number, c:number):void{
        if(neighbour < 2){arr[r][c] = 0}
        if(neighbour == 2 || neighbour == 3){arr[r][c] = 1}
        if(neighbour > 3){arr[r][c] = 0}
    }
}

