class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const car = position.map((p, i) => [p, (target - p)/ speed[i]])
        car.sort((a,b) => a[0] - b[0])

        let fleet = 0
        let lastFleetTime = 0

        for (let i = car.length - 1; i >= 0; i--) {
            const currTime = car[i][1]

            if (currTime > lastFleetTime) {
                fleet++
                lastFleetTime = currTime
            }
        }
        return fleet
    }
}
