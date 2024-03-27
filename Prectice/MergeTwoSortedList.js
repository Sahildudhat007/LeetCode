// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

{
    let list1 = [1,2,4];
    let list2 = [1,3,4];

    let NewList = list1.concat(list2).sort();
    console.log(NewList);
}

// Input: list1 = [], list2 = []
// Output: []

{
    let list1 = [];
    let list2 = [];

    let NewList = list1.concat(list2).sort();
    console.log(NewList);
}

// Input: list1 = [], list2 = [0]
// Output: [0]

{
    let list1 = [];
    let list2 = [0];

    let NewList = list1.concat(list2).sort();   
    console.log(NewList);
}

{
	function mergeSortLists(list1, list2) {
    let mergedlist = list1.concat(list2);
    
    mergedlist.sort(function(a, b) {
        return a - b;
    });
    
    return mergedlist;
	}

	let list1 = [1, 2, 4];
	let list2 = [1, 3, 4];
	let mergedSorted = mergeSortLists(list1, list2);
	console.log(mergedSorted);

}