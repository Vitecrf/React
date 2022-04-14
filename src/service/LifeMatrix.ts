import {getRandomMatrix, arrO} from "../util/random";

export default class LifeMatrix{
    constructor(private _numbers:number[][]) {

    }
    get numbers(){
        return this._numbers;
    }
    nextStep():number[][]{
        // this._numbers = getRandomMatrix(this._numbers.length, this._numbers.length, 0, 1);
        // this._numbers = arrO;
        let arr:number[][] = [...this._numbers];

        let newArr:number[][] = this._numIsLands(arr);


        console.log(this._numbers);
        return newArr;
    }

    private _numIsLands(arr:number[][]):number[][]{
        let counter:number = 0;
        let rowL:number = arr.length;
        let colsL:number = arr[0].length;
        // if(rowL === 0) return 0;

        for(let r:number = 0; r < rowL; r++){
            for(let c:number = 0; c < colsL; c++){
                if(arr[r][c] === 1){
                    counter = this._countNeighbour(arr, r, c);
                    this._markNeighbour(counter, arr, r, c);
                }
                if(arr[r][c] === 0){
                    counter = 0;
                    counter = this._countNeighbour(arr, r, c);
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

