{
    let nums1 = [1, 2, 3, 0, 0, 0];
    m = 3;
    let nums2 = [2, 5, 6];
    n = 3;

    const NewArray = nums1.concat(nums2).sort();
    console.log(NewArray);

    // function arrayshorting(nums1, m, nums2, n) {
    //     let k=m+n-1;
    //     let i=m-1;
    //     let j=n-1;
    //     while(j>=0){
    //         if(nums1[i]>=nums2[j]){
    //             nums1[k]=nums1[i]
    //             i--;
    //         }
    //         else{
    //             nums1[k]=nums2[j]
    //             j--;
    //         }
    //         k--
    //     }
    //     return nums1;
    // }
}

// {
//     let nums1 = [0];
//     m = 0;
//     let nums2 = [1];
//     n = 1;

//     const NewArray = nums1.concat(nums2).sort();
//     console.log(NewArray);
// }

// {
//     let nums1 = [0];
//     m=0;
//     let nums2 = [1];
//     n=1;

//     const NewArray = nums1.concat(nums2).sort();
//     console.log(NewArray)
// }