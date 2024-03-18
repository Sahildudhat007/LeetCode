// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

{
    const inssertionSort = [4, 2, 1, 3];

    inssertionSort.sort(function (a, b) {
        return a - b;
    });
    console.log(inssertionSort);
}


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

{
    const inssertionSort = [-1, 5, 3, 4, 0];

    inssertionSort.sort(function (a, b) {
        return a - b;
    });
    console.log(inssertionSort);
}
