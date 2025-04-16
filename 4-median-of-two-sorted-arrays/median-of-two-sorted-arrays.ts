function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; 
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;

    while (low <= high) {
        const px = Math.floor((low + high) / 2);
        const py = Math.floor((m + n + 1) / 2) - px;

        const mLx = px === 0 ? -Infinity : nums1[px - 1];
        const mRx = px === m ? Infinity : nums1[px];

        const mLy = py === 0 ? -Infinity : nums2[py - 1];
        const mRy = py === n ? Infinity : nums2[py];

        if (mLx <= mRy && mLy <= mRx) {
            if ((m + n) % 2 === 0) {
                return (Math.max(mLx, mLy) + Math.min(mRx, mRy)) / 2;
            } else {
                return Math.max(mLx, mLy);
            }
        } else if (mLx > mRy) {
            high = px - 1;
        } else {
            low = px + 1;
        }
    }

    throw new Error("Input not valid.");
}
