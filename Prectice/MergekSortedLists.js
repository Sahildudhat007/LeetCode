// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

{
    function mergesortlist(lists) {
    let mergedlist = [].concat(...lists);

    mergedlist.sort(function(a,b){
        return a-b;
    });
        return mergedlist;
    };

    let lists = [[1,4,5],[1,3,4],[2,6]];
    let mergesorted = mergesortlist(lists);
    console.log(mergesorted);
}

{
    function mergesortlist(lists) {
    let mergedlist = [].concat(...lists);

    mergedlist.sort(function(a,b){
        return a-b;
    });
        return mergedlist;
    };

    let lists = [];
    let mergesorted = mergesortlist(lists);
    console.log(mergesorted);
}

{
    function mergesortlist(lists) {
    let mergedlist = [].concat(...lists);

    mergedlist.sort(function(a,b){
        return a-b;
    });
        return mergedlist;
    };

    let lists = [[]];
    let mergesorted = mergesortlist(lists);
    console.log(mergesorted);
}