class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length: 9}, () => new Set())
        const col = Array.from({length: 9}, () => new Set())
        const box = Array.from({length: 9}, () => new Set())

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c]

                if (val === '.' || val === null) continue

                const boxId = Math.floor(r / 3) * 3 + Math.floor(c / 3)

                if (row[r].has(val) || col[c].has(val) || box[boxId].has(val)) {
                    return false
                }
                row[r].add(val)
                col[c].add(val)
                box[boxId].add(val)
            }
        }
        return true
    }
}
