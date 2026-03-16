import {Difficulty, TopicName, type AppData} from '../types/index.js';

/**
 * Helper to generate the initial progress state for a problem
 */
const createProgress = (problemId: string) => ({
    problemId,
    solved: false,
    confidence: null,
    lastUpdated: new Date().toISOString(),
});

export const defaultAppData: AppData = {
    version: 1,
    topics: [
        {
            id: 'arrays-and-hashing',
            name: TopicName.Arrays,
            groups: [
                {
                    id: 'array-basics',
                    name: 'Hashing & Elimination',
                    problemIds: [
                        'contains-duplicate',
                        'two-sum',
                        'group-anagrams',
                        'top-k-frequent-elements',
                        'product-of-array-except-self',
                        'longest-consecutive-sequence',
                    ],
                },
            ],
        },
        {
            id: 'two-pointers-topic',
            name: TopicName.TwoPointers,
            groups: [
                {
                    id: 'two-pointers-basic',
                    name: 'Converging Pointers',
                    problemIds: [
                        'valid-palindrome',
                        'two-sum-ii-input-array-is-sorted',
                        '3sum',
                        'container-with-most-water',
                        'trapping-rain-water',
                    ],
                },
            ],
        },
        {
            id: 'sliding-window-topic',
            name: TopicName.SlidingWindow,
            groups: [
                {
                    id: 'sliding-window-patterns',
                    name: 'Variable & Fixed Window',
                    problemIds: [
                        'best-time-to-buy-and-sell-stock',
                        'longest-substring-without-repeating-characters',
                        'longest-repeating-character-replacement',
                        'permutation-in-string',
                        'minimum-window-substring',
                    ],
                },
            ],
        },
        {
            id: 'stack-topic',
            name: TopicName.Stack,
            groups: [
                {
                    id: 'stack-monotonic',
                    name: 'Monotonic Stack & Classic',
                    problemIds: [
                        'valid-parentheses',
                        'min-stack',
                        'evaluate-reverse-polish-notation',
                        'daily-temperatures',
                        'largest-rectangle-in-histogram',
                    ],
                },
            ],
        },
        {
            id: 'linked-lists-topic',
            name: TopicName.LinkedLists,
            groups: [
                {
                    id: 'll-fast-slow',
                    name: 'Fast & Slow Pointers',
                    problemIds: [
                        'linked-list-cycle',
                        'reorder-list',
                        'remove-nth-node-from-end-of-list',
                        'linked-list-cycle-ii',
                    ],
                },
                {
                    id: 'll-reverse',
                    name: 'In-place Reversal',
                    problemIds: [
                        'reverse-linked-list',
                        'merge-two-sorted-lists',
                        'add-two-numbers',
                        'reverse-nodes-in-k-group',
                    ],
                },
            ],
        },
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
                    ],
                },
                {
                    id: 'graph-logic',
                    name: 'Cycles & Topological Sort',
                    problemIds: [
                        'course-schedule',
                        'course-schedule-ii',
                        'redundant-connection',
                        'find-eventual-safe-states',
                    ],
                },
                {
                    id: 'graph-search',
                    name: 'Connectivity & Shortest Path',
                    problemIds: [
                        'clone-graph',
                        'word-ladder',
                        'number-of-connected-components-in-an-undirected-graph',
                        'graph-valid-tree',
                    ],
                },
            ],
        },
        {
            id: 'heap-topic',
            name: TopicName.HeapPriorityQueue,
            groups: [
                {
                    id: 'heap-k-elements',
                    name: 'Top K Elements',
                    problemIds: [
                        'kth-largest-element-in-a-stream',
                        'last-stone-weight',
                        'k-closest-points-to-origin',
                        'kth-largest-element-in-an-array',
                        'find-median-from-data-stream',
                    ],
                },
            ],
        },
        {
            id: 'backtracking-topic',
            name: TopicName.Backtracking,
            groups: [
                {
                    id: 'backtracking-basic',
                    name: 'Combinations & Permutations',
                    problemIds: [
                        'subsets',
                        'permutations',
                        'combination-sum',
                        'word-search',
                        'n-queens',
                    ],
                },
            ],
        },
        {
            id: 'dynamic-programming-topic',
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
                    name: 'String & Sequences',
                    problemIds: [
                        'longest-common-subsequence',
                        'longest-increasing-subsequence',
                        'edit-distance',
                        'word-break',
                        'longest-palindromic-substring',
                        'palindromic-substrings',
                    ],
                },
                {
                    id: 'dp-grids',
                    name: 'DP on Grids',
                    problemIds: ['unique-paths', 'minimum-path-sum', 'maximum-product-subarray'],
                },
            ],
        },
    ],
    problems: {
        // --- ARRAYS & HASHING ---
        'contains-duplicate': {
            id: 'contains-duplicate',
            title: 'Contains Duplicate',
            leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/',
            difficulty: Difficulty.Easy,
        },
        'two-sum': {
            id: 'two-sum',
            title: 'Two Sum',
            leetcodeUrl: 'https://leetcode.com/problems/two-sum/',
            difficulty: Difficulty.Easy,
        },
        'group-anagrams': {
            id: 'group-anagrams',
            title: 'Group Anagrams',
            leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/',
            difficulty: Difficulty.Medium,
        },
        'top-k-frequent-elements': {
            id: 'top-k-frequent-elements',
            title: 'Top K Frequent Elements',
            leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/',
            difficulty: Difficulty.Medium,
        },
        'product-of-array-except-self': {
            id: 'product-of-array-except-self',
            title: 'Product of Array Except Self',
            leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/',
            difficulty: Difficulty.Medium,
        },
        'longest-consecutive-sequence': {
            id: 'longest-consecutive-sequence',
            title: 'Longest Consecutive Sequence',
            leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/',
            difficulty: Difficulty.Medium,
        },

        // --- TWO POINTERS ---
        'valid-palindrome': {
            id: 'valid-palindrome',
            title: 'Valid Palindrome',
            leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/',
            difficulty: Difficulty.Easy,
        },
        'two-sum-ii-input-array-is-sorted': {
            id: 'two-sum-ii-input-array-is-sorted',
            title: 'Two Sum II',
            leetcodeUrl: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
            difficulty: Difficulty.Medium,
        },
        '3sum': {
            id: '3sum',
            title: '3Sum',
            leetcodeUrl: 'https://leetcode.com/problems/3sum/',
            difficulty: Difficulty.Medium,
        },
        'container-with-most-water': {
            id: 'container-with-most-water',
            title: 'Container With Most Water',
            leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
            difficulty: Difficulty.Medium,
        },
        'trapping-rain-water': {
            id: 'trapping-rain-water',
            title: 'Trapping Rain Water',
            leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
            difficulty: Difficulty.Hard,
        },

        // --- SLIDING WINDOW ---
        'best-time-to-buy-and-sell-stock': {
            id: 'best-time-to-buy-and-sell-stock',
            title: 'Best Time to Buy and Sell Stock',
            leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
            difficulty: Difficulty.Easy,
        },
        'longest-substring-without-repeating-characters': {
            id: 'longest-substring-without-repeating-characters',
            title: 'Longest Substring Without Repeating Characters',
            leetcodeUrl:
                'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
            difficulty: Difficulty.Medium,
        },
        'longest-repeating-character-replacement': {
            id: 'longest-repeating-character-replacement',
            title: 'Longest Repeating Character Replacement',
            leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
            difficulty: Difficulty.Medium,
        },
        'permutation-in-string': {
            id: 'permutation-in-string',
            title: 'Permutation in String',
            leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/',
            difficulty: Difficulty.Medium,
        },
        'minimum-window-substring': {
            id: 'minimum-window-substring',
            title: 'Minimum Window Substring',
            leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
            difficulty: Difficulty.Hard,
        },

        // --- STACK ---
        'valid-parentheses': {
            id: 'valid-parentheses',
            title: 'Valid Parentheses',
            leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
            difficulty: Difficulty.Easy,
        },
        'min-stack': {
            id: 'min-stack',
            title: 'Min Stack',
            leetcodeUrl: 'https://leetcode.com/problems/min-stack/',
            difficulty: Difficulty.Medium,
        },
        'evaluate-reverse-polish-notation': {
            id: 'evaluate-reverse-polish-notation',
            title: 'Evaluate Reverse Polish Notation',
            leetcodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
            difficulty: Difficulty.Medium,
        },
        'daily-temperatures': {
            id: 'daily-temperatures',
            title: 'Daily Temperatures',
            leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/',
            difficulty: Difficulty.Medium,
        },
        'largest-rectangle-in-histogram': {
            id: 'largest-rectangle-in-histogram',
            title: 'Largest Rectangle in Histogram',
            leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
            difficulty: Difficulty.Hard,
        },

        // --- LINKED LIST ---
        'reverse-linked-list': {
            id: 'reverse-linked-list',
            title: 'Reverse Linked List',
            leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/',
            difficulty: Difficulty.Easy,
        },
        'merge-two-sorted-lists': {
            id: 'merge-two-sorted-lists',
            title: 'Merge Two Sorted Lists',
            leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/',
            difficulty: Difficulty.Easy,
        },
        'linked-list-cycle': {
            id: 'linked-list-cycle',
            title: 'Linked List Cycle',
            leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/',
            difficulty: Difficulty.Easy,
        },
        'reorder-list': {
            id: 'reorder-list',
            title: 'Reorder List',
            leetcodeUrl: 'https://leetcode.com/problems/reorder-list/',
            difficulty: Difficulty.Medium,
        },
        'remove-nth-node-from-end-of-list': {
            id: 'remove-nth-node-from-end-of-list',
            title: 'Remove Nth Node From End of List',
            leetcodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
            difficulty: Difficulty.Medium,
        },
        'add-two-numbers': {
            id: 'add-two-numbers',
            title: 'Add Two Numbers',
            leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers/',
            difficulty: Difficulty.Medium,
        },
        'linked-list-cycle-ii': {
            id: 'linked-list-cycle-ii',
            title: 'Linked List Cycle II',
            leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle-ii/',
            difficulty: Difficulty.Medium,
        },
        'reverse-nodes-in-k-group': {
            id: 'reverse-nodes-in-k-group',
            title: 'Reverse Nodes in k-Group',
            leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
            difficulty: Difficulty.Hard,
        },

        // --- TREES ---
        'invert-binary-tree': {
            id: 'invert-binary-tree',
            title: 'Invert Binary Tree',
            leetcodeUrl: 'https://leetcode.com/problems/invert-binary-tree/',
            difficulty: Difficulty.Easy,
        },
        'maximum-depth-of-binary-tree': {
            id: 'maximum-depth-of-binary-tree',
            title: 'Maximum Depth of Binary Tree',
            leetcodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
            difficulty: Difficulty.Easy,
        },
        'diameter-of-binary-tree': {
            id: 'diameter-of-binary-tree',
            title: 'Diameter of Binary Tree',
            leetcodeUrl: 'https://leetcode.com/problems/diameter-of-binary-tree/',
            difficulty: Difficulty.Easy,
        },
        'balanced-binary-tree': {
            id: 'balanced-binary-tree',
            title: 'Balanced Binary Tree',
            leetcodeUrl: 'https://leetcode.com/problems/balanced-binary-tree/',
            difficulty: Difficulty.Easy,
        },
        'same-tree': {
            id: 'same-tree',
            title: 'Same Tree',
            leetcodeUrl: 'https://leetcode.com/problems/same-tree/',
            difficulty: Difficulty.Easy,
        },
        'subtree-of-another-tree': {
            id: 'subtree-of-another-tree',
            title: 'Subtree of Another Tree',
            leetcodeUrl: 'https://leetcode.com/problems/subtree-of-another-tree/',
            difficulty: Difficulty.Easy,
        },
        'path-sum': {
            id: 'path-sum',
            title: 'Path Sum',
            leetcodeUrl: 'https://leetcode.com/problems/path-sum/',
            difficulty: Difficulty.Easy,
        },
        'binary-tree-level-order-traversal': {
            id: 'binary-tree-level-order-traversal',
            title: 'Binary Tree Level Order Traversal',
            leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
            difficulty: Difficulty.Medium,
        },
        'binary-tree-right-side-view': {
            id: 'binary-tree-right-side-view',
            title: 'Binary Tree Right Side View',
            leetcodeUrl: 'https://leetcode.com/problems/binary-tree-right-side-view/',
            difficulty: Difficulty.Medium,
        },
        'binary-tree-zigzag-level-order-traversal': {
            id: 'binary-tree-zigzag-level-order-traversal',
            title: 'Binary Tree Zigzag Level Order Traversal',
            leetcodeUrl: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
            difficulty: Difficulty.Medium,
        },
        'lowest-common-ancestor-of-a-binary-search-tree': {
            id: 'lowest-common-ancestor-of-a-binary-search-tree',
            title: 'Lowest Common Ancestor of a BST',
            leetcodeUrl:
                'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
            difficulty: Difficulty.Medium,
        },
        'validate-binary-search-tree': {
            id: 'validate-binary-search-tree',
            title: 'Validate Binary Search Tree',
            leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/',
            difficulty: Difficulty.Medium,
        },
        'kth-smallest-element-in-a-bst': {
            id: 'kth-smallest-element-in-a-bst',
            title: 'Kth Smallest Element in a BST',
            leetcodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
            difficulty: Difficulty.Medium,
        },
        'construct-binary-tree-from-preorder-and-inorder-traversal': {
            id: 'construct-binary-tree-from-preorder-and-inorder-traversal',
            title: 'Construct Binary Tree from Preorder and Inorder Traversal',
            leetcodeUrl:
                'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
            difficulty: Difficulty.Medium,
        },
        'populating-next-right-pointers-in-each-node': {
            id: 'populating-next-right-pointers-in-each-node',
            title: 'Populating Next Right Pointers in Each Node',
            leetcodeUrl:
                'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/',
            difficulty: Difficulty.Medium,
        },
        'binary-tree-maximum-path-sum': {
            id: 'binary-tree-maximum-path-sum',
            title: 'Binary Tree Maximum Path Sum',
            leetcodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
            difficulty: Difficulty.Hard,
        },

        // --- GRAPHS ---
        'number-of-islands': {
            id: 'number-of-islands',
            title: 'Number of Islands',
            leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/',
            difficulty: Difficulty.Medium,
        },
        'max-area-of-island': {
            id: 'max-area-of-island',
            title: 'Max Area of Island',
            leetcodeUrl: 'https://leetcode.com/problems/max-area-of-island/',
            difficulty: Difficulty.Medium,
        },
        'rotting-oranges': {
            id: 'rotting-oranges',
            title: 'Rotting Oranges',
            leetcodeUrl: 'https://leetcode.com/problems/rotting-oranges/',
            difficulty: Difficulty.Medium,
        },
        'surrounded-regions': {
            id: 'surrounded-regions',
            title: 'Surrounded Regions',
            leetcodeUrl: 'https://leetcode.com/problems/surrounded-regions/',
            difficulty: Difficulty.Medium,
        },
        'pacific-atlantic-water-flow': {
            id: 'pacific-atlantic-water-flow',
            title: 'Pacific Atlantic Water Flow',
            leetcodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
            difficulty: Difficulty.Medium,
        },
        'clone-graph': {
            id: 'clone-graph',
            title: 'Clone Graph',
            leetcodeUrl: 'https://leetcode.com/problems/clone-graph/',
            difficulty: Difficulty.Medium,
        },
        'course-schedule': {
            id: 'course-schedule',
            title: 'Course Schedule',
            leetcodeUrl: 'https://leetcode.com/problems/course-schedule/',
            difficulty: Difficulty.Medium,
        },
        'course-schedule-ii': {
            id: 'course-schedule-ii',
            title: 'Course Schedule II',
            leetcodeUrl: 'https://leetcode.com/problems/course-schedule-ii/',
            difficulty: Difficulty.Medium,
        },
        'redundant-connection': {
            id: 'redundant-connection',
            title: 'Redundant Connection',
            leetcodeUrl: 'https://leetcode.com/problems/redundant-connection/',
            difficulty: Difficulty.Medium,
        },
        'find-eventual-safe-states': {
            id: 'find-eventual-safe-states',
            title: 'Find Eventual Safe States',
            leetcodeUrl: 'https://leetcode.com/problems/find-eventual-safe-states/',
            difficulty: Difficulty.Medium,
        },
        'number-of-connected-components-in-an-undirected-graph': {
            id: 'number-of-connected-components-in-an-undirected-graph',
            title: 'Number of Connected Components in an Undirected Graph',
            leetcodeUrl:
                'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/',
            difficulty: Difficulty.Medium,
        },
        'graph-valid-tree': {
            id: 'graph-valid-tree',
            title: 'Graph Valid Tree',
            leetcodeUrl: 'https://leetcode.com/problems/graph-valid-tree/',
            difficulty: Difficulty.Medium,
        },
        'word-ladder': {
            id: 'word-ladder',
            title: 'Word Ladder',
            leetcodeUrl: 'https://leetcode.com/problems/word-ladder/',
            difficulty: Difficulty.Hard,
        },

        // --- HEAP ---
        'kth-largest-element-in-a-stream': {
            id: 'kth-largest-element-in-a-stream',
            title: 'Kth Largest Element in a Stream',
            leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
            difficulty: Difficulty.Easy,
        },
        'last-stone-weight': {
            id: 'last-stone-weight',
            title: 'Last Stone Weight',
            leetcodeUrl: 'https://leetcode.com/problems/last-stone-weight/',
            difficulty: Difficulty.Easy,
        },
        'k-closest-points-to-origin': {
            id: 'k-closest-points-to-origin',
            title: 'K Closest Points to Origin',
            leetcodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin/',
            difficulty: Difficulty.Medium,
        },
        'kth-largest-element-in-an-array': {
            id: 'kth-largest-element-in-an-array',
            title: 'Kth Largest Element in an Array',
            leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
            difficulty: Difficulty.Medium,
        },
        'find-median-from-data-stream': {
            id: 'find-median-from-data-stream',
            title: 'Find Median from Data Stream',
            leetcodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream/',
            difficulty: Difficulty.Hard,
        },

        // --- BACKTRACKING ---
        subsets: {
            id: 'subsets',
            title: 'Subsets',
            leetcodeUrl: 'https://leetcode.com/problems/subsets/',
            difficulty: Difficulty.Medium,
        },
        permutations: {
            id: 'permutations',
            title: 'Permutations',
            leetcodeUrl: 'https://leetcode.com/problems/permutations/',
            difficulty: Difficulty.Medium,
        },
        'combination-sum': {
            id: 'combination-sum',
            title: 'Combination Sum',
            leetcodeUrl: 'https://leetcode.com/problems/combination-sum/',
            difficulty: Difficulty.Medium,
        },
        'word-search': {
            id: 'word-search',
            title: 'Word Search',
            leetcodeUrl: 'https://leetcode.com/problems/word-search/',
            difficulty: Difficulty.Medium,
        },
        'n-queens': {
            id: 'n-queens',
            title: 'N-Queens',
            leetcodeUrl: 'https://leetcode.com/problems/n-queens/',
            difficulty: Difficulty.Hard,
        },

        // --- DYNAMIC PROGRAMMING ---
        'climbing-stairs': {
            id: 'climbing-stairs',
            title: 'Climbing Stairs',
            leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/',
            difficulty: Difficulty.Easy,
        },
        'min-cost-climbing-stairs': {
            id: 'min-cost-climbing-stairs',
            title: 'Min Cost Climbing Stairs',
            leetcodeUrl: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
            difficulty: Difficulty.Easy,
        },
        'house-robber': {
            id: 'house-robber',
            title: 'House Robber',
            leetcodeUrl: 'https://leetcode.com/problems/house-robber/',
            difficulty: Difficulty.Medium,
        },
        'house-robber-ii': {
            id: 'house-robber-ii',
            title: 'House Robber II',
            leetcodeUrl: 'https://leetcode.com/problems/house-robber-ii/',
            difficulty: Difficulty.Medium,
        },
        'decode-ways': {
            id: 'decode-ways',
            title: 'Decode Ways',
            leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
            difficulty: Difficulty.Medium,
        },
        'coin-change': {
            id: 'coin-change',
            title: 'Coin Change',
            leetcodeUrl: 'https://leetcode.com/problems/coin-change/',
            difficulty: Difficulty.Medium,
        },
        'coin-change-ii': {
            id: 'coin-change-ii',
            title: 'Coin Change II',
            leetcodeUrl: 'https://leetcode.com/problems/coin-change-ii/',
            difficulty: Difficulty.Medium,
        },
        'partition-equal-subset-sum': {
            id: 'partition-equal-subset-sum',
            title: 'Partition Equal Subset Sum',
            leetcodeUrl: 'https://leetcode.com/problems/partition-equal-subset-sum/',
            difficulty: Difficulty.Medium,
        },
        'target-sum': {
            id: 'target-sum',
            title: 'Target Sum',
            leetcodeUrl: 'https://leetcode.com/problems/target-sum/',
            difficulty: Difficulty.Medium,
        },
        'longest-common-subsequence': {
            id: 'longest-common-subsequence',
            title: 'Longest Common Subsequence',
            leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/',
            difficulty: Difficulty.Medium,
        },
        'longest-increasing-subsequence': {
            id: 'longest-increasing-subsequence',
            title: 'Longest Increasing Subsequence',
            leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/',
            difficulty: Difficulty.Medium,
        },
        'word-break': {
            id: 'word-break',
            title: 'Word Break',
            leetcodeUrl: 'https://leetcode.com/problems/word-break/',
            difficulty: Difficulty.Medium,
        },
        'longest-palindromic-substring': {
            id: 'longest-palindromic-substring',
            title: 'Longest Palindromic Substring',
            leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/',
            difficulty: Difficulty.Medium,
        },
        'palindromic-substrings': {
            id: 'palindromic-substrings',
            title: 'Palindromic Substrings',
            leetcodeUrl: 'https://leetcode.com/problems/palindromic-substrings/',
            difficulty: Difficulty.Medium,
        },
        'unique-paths': {
            id: 'unique-paths',
            title: 'Unique Paths',
            leetcodeUrl: 'https://leetcode.com/problems/unique-paths/',
            difficulty: Difficulty.Medium,
        },
        'minimum-path-sum': {
            id: 'minimum-path-sum',
            title: 'Minimum Path Sum',
            leetcodeUrl: 'https://leetcode.com/problems/minimum-path-sum/',
            difficulty: Difficulty.Medium,
        },
        'maximum-product-subarray': {
            id: 'maximum-product-subarray',
            title: 'Maximum Product Subarray',
            leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
            difficulty: Difficulty.Medium,
        },
        'edit-distance': {
            id: 'edit-distance',
            title: 'Edit Distance',
            leetcodeUrl: 'https://leetcode.com/problems/edit-distance/',
            difficulty: Difficulty.Hard,
        },
    },
    progress: {}, // Populated below
};

// Populate initial progress for all included problems
Object.keys(defaultAppData.problems).forEach((id) => {
    defaultAppData.progress[id] = createProgress(id);
});
