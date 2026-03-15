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
                    ],
                },
            ],
        },
        {
            id: 'sliding-window-topic',
            name: TopicName.SlidingWindow,
            groups: [
                {
                    id: 'sliding-window-fixed',
                    name: 'Variable & Fixed Window',
                    problemIds: [
                        'best-time-to-buy-and-sell-stock',
                        'longest-substring-without-repeating-characters',
                        'longest-repeating-character-replacement',
                        'minimum-window-substring',
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
                    ],
                },
                {
                    id: 'll-reverse',
                    name: 'In-place Reversal',
                    problemIds: [
                        'reverse-linked-list',
                        'merge-two-sorted-lists',
                        'add-two-numbers',
                    ],
                },
            ],
        },
        {
            id: 'trees-topic',
            name: TopicName.Trees,
            groups: [
                {
                    id: 'tree-traversal',
                    name: 'Depth First Search',
                    problemIds: [
                        'invert-binary-tree',
                        'maximum-depth-of-binary-tree',
                        'diameter-of-binary-tree',
                        'balanced-binary-tree',
                        'same-tree',
                    ],
                },
                {
                    id: 'tree-construction',
                    name: 'Level Order Traversal',
                    problemIds: [
                        'binary-tree-level-order-traversal',
                        'binary-tree-right-side-view',
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
                    name: 'Fibonacci Pattern',
                    problemIds: ['climbing-stairs', 'min-cost-climbing-stairs', 'house-robber'],
                },
                {
                    id: 'dp-knapsack',
                    name: '0/1 Knapsack & Variants',
                    problemIds: ['coin-change', 'word-break', 'longest-increasing-subsequence'],
                },
            ],
        },
    ],
    problems: {
        // Arrays
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

        // Two Pointers
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

        // Sliding Window
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
        'minimum-window-substring': {
            id: 'minimum-window-substring',
            title: 'Minimum Window Substring',
            leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
            difficulty: Difficulty.Hard,
        },

        // Linked List
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

        // Trees
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

        // DP
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
        'coin-change': {
            id: 'coin-change',
            title: 'Coin Change',
            leetcodeUrl: 'https://leetcode.com/problems/coin-change/',
            difficulty: Difficulty.Medium,
        },
        'word-break': {
            id: 'word-break',
            title: 'Word Break',
            leetcodeUrl: 'https://leetcode.com/problems/word-break/',
            difficulty: Difficulty.Medium,
        },
        'longest-increasing-subsequence': {
            id: 'longest-increasing-subsequence',
            title: 'Longest Increasing Subsequence',
            leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/',
            difficulty: Difficulty.Medium,
        },
    },
    progress: {}, // To be populated below
};

// Populate initial progress for all included problems
Object.keys(defaultAppData.problems).forEach((id) => {
    defaultAppData.progress[id] = createProgress(id);
});
