class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adj = Array.from({ length: numCourses }, () => []);
        let indegree = Array(numCourses).fill(0);

        // Build adjacency list
        for (let [a, b] of prerequisites) {
            adj[b].push(a);
            indegree[a]++;
        }

        // Initialize queue
        let queue = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let result = [];
        let front = 0;

        // BFS (Kahn's Algorithm)
        while (front < queue.length) {
            let course = queue[front++];
            result.push(course);

            for (let next of adj[course]) {
                indegree[next]--;

                if (indegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        // Cycle detection
        return result.length === numCourses ? result : [];
    }
}