class Solution {

    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        let graph = Array.from({ length: numCourses }, () => []);
        let indegree = new Array(numCourses).fill(0);

        // Graph banana
        for (let [course, prerequisite] of prerequisites) {
            graph[prerequisite].push(course);
            indegree[course]++;
        }

        // Jinke prerequisite nahi hain
        let queue = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let completed = 0;

        // BFS / Topological Sort
        while (queue.length > 0) {

            let course = queue.shift();
            completed++;

            for (let nextCourse of graph[course]) {

                indegree[nextCourse]--;

                if (indegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        return completed === numCourses;
    }
}