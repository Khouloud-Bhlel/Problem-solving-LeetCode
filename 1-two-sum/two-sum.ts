function twoSum(nums: number[], target: number): number[] {
    
    const m =new Map<number, number>(); 
    for (let i=0;i < nums.length; i++) {
        const c=target-nums[i];
        if (m.has(c)){
            return [m.get(c)!,i];

        }
        m.set(nums[i],i);
    }
    throw new Error("nooooo solution");
};