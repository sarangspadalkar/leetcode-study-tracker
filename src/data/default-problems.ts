import {Difficulty, TopicName, type AppData} from '../types/index.js';

const createProgress = (problemId: string) => ({
    problemId,
    solved: false,
    confidence: null,
    lastUpdated: new Date().toISOString(),
});

export const defaultAppData: AppData = {
    version: 1,
    topics: [
        // ... (Keep existing Arrays, Two Pointers, Sliding Window)
        {
            id: 'trees-topic',
            name: TopicName.Trees,
            groups: [
                {
                    id: 'tree-dfs',
                    name: 'DFS & Tree Properties',
                    problemIds: [
                        'invert-binary-tree',
                        'maximum-depth-of-binary-tree',
                        'diameter-of-binary-tree',
                        'balanced-binary-tree',
                        'same-tree',
                        'subtree-of-another-tree',
                        'path-sum',
                        'binary-tree-maximum-path-sum',
                    ],
                },
                {
                    id: 'tree-bfs',
                    name: 'BFS (Level Order Traversal)',
                    problemIds: [
                        'binary-tree-level-order-traversal',
                        'binary-tree-right-side-view',
                        'binary-tree-zigzag-level-order-traversal',
                        'populating-next-right-pointers-in-each-node',
                    ],
                },
                {
                    id: 'bst-patterns',
                    name: 'Binary Search Tree (BST)',
                    problemIds: [
                        'lowest-common-ancestor-of-a-binary-search-tree',
                        'validate-binary-search-tree',
                        'kth-smallest-element-in-a-bst',
                        'construct-binary-tree-from-preorder-and-inorder-traversal',
                    ],
                },
            ],
        },
        {
            id: 'graphs-topic',
            name: TopicName.Graphs,
            groups: [
                {
                    id: 'graph-matrix',
                    name: 'Matrix Traversal (DFS/BFS)',
                    problemIds: [
                        'number-of-islands',
                        'max-area-of-island',
                        'rotting-oranges',
                        'surrounded-regions',
                        'pacific-atlantic-water-flow',
                        'walls-and-gates',
                    ],
                },
                {
                    id: 'graph-logic',
                    name: 'Topological Sort & Cycles',
                    problemIds: [
                        'course-schedule',
                        'course-schedule-ii',
                        'redundant-connection',
                        'find-eventual-safe-states',
                    ],
                },
                {
                    id: 'graph-search',
                    name: 'Shortest Path & Advanced BFS',
                    problemIds: [
                        'clone-graph',
                        'word-ladder',
                        'number-of-connected-components-in-an-undirected-graph',
                    ],
                },
            ],
        },
        {
            id: 'dp-topic',
            name: TopicName.DynamicProgramming,
            groups: [
                {
                    id: 'dp-fibonacci',
                    name: 'Fibonacci & 1D DP',
                    problemIds: [
                        'climbing-stairs',
                        'min-cost-climbing-stairs',
                        'house-robber',
                        'house-robber-ii',
                        'decode-ways',
                    ],
                },
                {
                    id: 'dp-knapsack',
                    name: '0/1 Knapsack & Coin Change',
                    problemIds: [
                        'coin-change',
                        'coin-change-ii',
                        'partition-equal-subset-sum',
                        'target-sum',
                    ],
                },
                {
                    id: 'dp-strings',
                    name: 'String & Longest Sequences',
                    problemIds: [
                        'longest-common-subsequence',
                        'longest-increasing-subsequence',
                        'edit-distance',
                        'word-break',
                        'palindromic-substrings',
                        'longest-palindromic-substring',
                    ],
                },
                {
                    id: 'dp-optimization',
                    name: 'DP on Grids',
                    problemIds: ['unique-paths', 'minimum-path-sum', 'maximum-product-subarray'],
                },
            ],
        },
    ],
    problems: {
        // --- TREES ---
        'subtree-of-another-tree': {
            id: 'subtree-of-another-tree',
            title: 'Subtree of Another Tree',
            leetcodeUrl: 'https://leetcode.com/problems/subtree-of-another-tree/',
            difficulty: Difficulty.Easy,
        },
        'binary-tree-maximum-path-sum': {
            id: 'binary-tree-maximum-path-sum',
            title: 'Binary Tree Maximum Path Sum',
            leetcodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
            difficulty: Difficulty.Hard,
        },
        'populating-next-right-pointers-in-each-node': {
            id: 'populating-next-right-pointers-in-each-node',
            title: 'Populating Next Right Pointers in Each Node',
            leetcodeUrl:
                'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/',
            difficulty: Difficulty.Medium,
        },
        'validate-binary-search-tree': {
            id: 'validate-binary-search-tree',
            title: 'Validate Binary Search Tree',
            leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/',
            difficulty: Difficulty.Medium,
        },

        // --- GRAPHS ---
        'number-of-islands': {
            id: 'number-of-islands',
            title: 'Number of Islands',
            leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/',
            difficulty: Difficulty.Medium,
        },
        'word-ladder': {
            id: 'word-ladder',
            title: 'Word Ladder',
            leetcodeUrl: 'https://leetcode.com/problems/word-ladder/',
            difficulty: Difficulty.Hard,
        },
        'find-eventual-safe-states': {
            id: 'find-eventual-safe-states',
            title: 'Find Eventual Safe States',
            leetcodeUrl: 'https://leetcode.com/problems/find-eventual-safe-states/',
            difficulty: Difficulty.Medium,
        },
        'pacific-atlantic-water-flow': {
            id: 'pacific-atlantic-water-flow',
            title: 'Pacific Atlantic Water Flow',
            leetcodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
            difficulty: Difficulty.Medium,
        },

        // --- DP ---
        'edit-distance': {
            id: 'edit-distance',
            title: 'Edit Distance',
            leetcodeUrl: 'https://leetcode.com/problems/edit-distance/',
            difficulty: Difficulty.Hard,
        },
        'partition-equal-subset-sum': {
            id: 'partition-equal-subset-sum',
            title: 'Partition Equal Subset Sum',
            leetcodeUrl: 'https://leetcode.com/problems/partition-equal-subset-sum/',
            difficulty: Difficulty.Medium,
        },
        'unique-paths': {
            id: 'unique-paths',
            title: 'Unique Paths',
            leetcodeUrl: 'https://leetcode.com/problems/unique-paths/',
            difficulty: Difficulty.Medium,
        },
        'decode-ways': {
            id: 'decode-ways',
            title: 'Decode Ways',
            leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
            difficulty: Difficulty.Medium,
        },
        // ... include previous problem definitions here
    },
    progress: {},
};

// Auto-initialize progress for all problems
Object.keys(defaultAppData.problems).forEach((id) => {
    defaultAppData.progress[id] = createProgress(id);
});
