import React from 'react';
import LifeMatrix from '../src/service/LifeMatrix';


test('life game nextStep 1', () => {
    const arr: number[][] = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
    ];
    const expectd: number[][] = [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ]
    const lifeMatrix = new LifeMatrix(arr);
    expect(lifeMatrix.nextStep()).toEqual(expectd);
});
test('life game nextStep 2', () => {
    const arr: number[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    const expectd: number[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    const lifeMatrix = new LifeMatrix(arr);
    expect(lifeMatrix.nextStep()).toEqual(expectd);
});
// [
//     [0,0,0,0,0,0],
//     [0,0,1,0,0,0],
//     [0,0,1,0,0,0],
//     [0,0,1,0,0,0],
//     [0,0,0,0,0,0]
// ]
//=======================
// [
//     [0,0,0,0,0,0],
//     [0,0,1,1,0,0],
//     [0,1,0,1,0,0],
//     [0,0,0,0,0,0],
//     [0,0,0,0,0,0]
// ]
