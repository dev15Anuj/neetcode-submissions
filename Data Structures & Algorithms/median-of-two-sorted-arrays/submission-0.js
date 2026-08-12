class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        // Binary search hamesha chhote array par lagayenge
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        let m = nums1.length;
        let n = nums2.length;

        let left = 0;
        let right = m;

        while (left <= right) {

            // Partition of nums1
            let partitionX = Math.floor((left + right) / 2);

            // Partition of nums2
            let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

            let maxLeftX =
                (partitionX === 0) ? -Infinity : nums1[partitionX - 1];

            let minRightX =
                (partitionX === m) ? Infinity : nums1[partitionX];

            let maxLeftY =
                (partitionY === 0) ? -Infinity : nums2[partitionY - 1];

            let minRightY =
                (partitionY === n) ? Infinity : nums2[partitionY];

            // Correct partition mil gaya
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {

                // Total elements even hain
                if ((m + n) % 2 === 0) {
                    return (
                        Math.max(maxLeftX, maxLeftY) +
                        Math.min(minRightX, minRightY)
                    ) / 2;
                }

                // Total elements odd hain
                return Math.max(maxLeftX, maxLeftY);
            }

            // Left side me jyada elements aa gaye
            if (maxLeftX > minRightY) {
                right = partitionX - 1;
            }
            // Left side me kam elements hain
            else {
                left = partitionX + 1;
            }
        }

        return 0;
    }
}