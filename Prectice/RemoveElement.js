// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

{
    function removeElement(nums, val) {
    let j = 0;

    for(let i = 0; i<nums.length; i++){
            if(nums[i]!==val){
                nums[j] = nums[i];
                j++
            }
        }
        return j;
    }

    let nums = [3,2,2,3];
    let val = 3;
    let newElement = removeElement(nums, val);
    console.log(newElement);
    console.log(nums.slice(0,newElement));
}


// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

{
    function removeElement(nums, val) {
    let j = 0;

    for(let i = 0; i<nums.length; i++){
            if(nums[i]!==val){
                nums[j] = nums[i];
                j++
            }
        }
        return j;
    }

    let nums = [0,1,2,2,3,0,4,2];
    let val = 2;
    let newElement = removeElement(nums, val);
    console.log(newElement);
    console.log(nums.slice(0,newElement));
}