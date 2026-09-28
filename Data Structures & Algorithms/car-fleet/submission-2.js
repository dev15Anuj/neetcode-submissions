class Solution {

    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        let cars = [];

        // Position aur speed ko pair karo
        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

        // Target ke closest car ko pehle rakho
        cars.sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let lastTime = 0;

        for (let [pos, spd] of cars) {

            let time = (target - pos) / spd;

            // Agar current car ko fleet ke saath catch up
            // karne ke liye zyada time lagega,
            // toh ye new fleet hai
            if (time > lastTime) {
                fleets++;
                lastTime = time;
            }
        }

        return fleets;
    }
}