{
    function isPowerOfTwo(n) {
        if(n < 1){
            return false;
        }
        else if(n == 1){
            return true;
        }
        else if(n%2==1){
            return false;
        }
        else{
            return (isPowerOfTwo(n/2));
        }
    }
    let n = 1;
    // let n = 16;
    // let n = 3;
    let result = isPowerOfTwo(n);
    console.log(result);
}