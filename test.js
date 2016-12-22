let nums = [1, 0, 0];

let pos = 1;
let a = 1;
for(let i=0; i<1000; i++){
    nums[pos]++;
    
    console.log(nums);
    
    if(pos === 2 || pos === 0)
        a = -a;
    
    pos += a;
}