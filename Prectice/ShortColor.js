// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

{
    const sortColors = [2, 0, 2, 1, 1, 0];

    sortColors.sort(function (a, b) {
        return a - b;
    });
    console.log(sortColors);
}

// Input: nums = [2,0,1]
// Output: [0,1,2]

{
    const sortColors = [2,0,1];

    sortColors.sort(function(a,b){
        return a-b;
    });
    console.log(sortColors);
}