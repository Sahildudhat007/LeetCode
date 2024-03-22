// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

{
    const sortList = [4, 2, 1, 3];

    sortList.sort(function (a, b) {
        return a - b;
    });
    console.log(sortList);
}


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

{
    const sortList = [-1, 5, 3, 4, 0];

    sortList.sort(function (a, b) {
        return a - b;
    });
    console.log(sortList);
}