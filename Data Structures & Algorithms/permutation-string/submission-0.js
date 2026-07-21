class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const len1 = s1.length;
    const len2 = s2.length;
    if (len1 > len2) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    // Populate initial frequencies for s1 and the first window of s2
    for (let i = 0; i < len1; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    // Slide the window across s2
    for (let i = len1; i < len2; i++) {
        if (this.matches(count1, count2)) return true;

        // Add the next character on the right
        count2[s2.charCodeAt(i) - 97]++;
        // Remove the oldest character on the left
        count2[s2.charCodeAt(i - len1) - 97]--;
    }

    return this.matches(count1, count2);
}

 matches(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
    }
}
