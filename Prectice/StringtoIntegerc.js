// Input: s = "42"
// Output: 42

{
    let s = "42";

    console.log(parseInt(s));
}


// Input: s = "   -42"
// Output: -42

{
    let s = "   -42";

    console.log(s);
    console.log(parseInt(s.trimStart()));
}


// Input: s = "4193 with words"
// Output: 4193

{
    let s = "4193 with words"
    
    console.log(parseInt(s));
}