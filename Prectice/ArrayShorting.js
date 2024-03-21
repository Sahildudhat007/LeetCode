{
    let nums1 = [1, 2, 3, 0, 0, 0];
    m = 3;
    let nums2 = [2, 5, 6];
    n = 3;

    let x = nums1.slice(0,m);
    let y = nums2.slice(0,n);

    let NewArray = x.concat(y).sort();
    console.log(NewArray);
}

{
    let nums1 = [1];
    m = 1;
    let nums2 = [];
    n = 0;

    let x = nums1.slice(0,m);
    let y = nums2.slice(0,n);

    let NewArray = x.concat(y).sort();
    console.log(NewArray);
}

{
    let nums1 = [0];
    m=0;
    let nums2 = [1];
    n=1;

    let x = nums1.slice(0,m);
    let y =nums2.slice(0,n);

    let NewArray = x.concat(y).sort();
    console.log(NewArray);
}