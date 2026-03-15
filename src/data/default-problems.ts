import { Difficulty, TopicName, type AppData } from '../types/index.js';

const dpTopicId = 'dynamic-programming';
const fibGroupId = 'dp-fibonacci-pattern';
const houseGroupId = 'dp-house-robber-pattern';

const problemIds = {
    climbingStairs: 'climbing-stairs',
    tribonacci: 'n-th-tribonacci-number',
    minCostClimbing: 'min-cost-climbing-stairs',
    houseRobber: 'house-robber',
    houseRobber2: 'house-robber-ii',
    decodeWays: 'decode-ways',
} as const;

export const defaultAppData: AppData = {
    version: 1,
    topics: [
        {
            id: dpTopicId,
            name: TopicName.DynamicProgramming,
            groups: [
                {
                    id: fibGroupId,
                    name: 'Fibonacci Pattern',
                    problemIds: [
                        problemIds.climbingStairs,
                        problemIds.tribonacci,
                        problemIds.minCostClimbing,
                    ],
                },
                {
                    id: houseGroupId,
                    name: 'House Robber Pattern',
                    problemIds: [
                        problemIds.houseRobber,
                        problemIds.houseRobber2,
                        problemIds.decodeWays,
                    ],
                },
            ],
        },
    ],
    problems: {
        [problemIds.climbingStairs]: {
            id: problemIds.climbingStairs,
            title: 'Climbing Stairs',
            leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/',
            difficulty: Difficulty.Easy,
        },
        [problemIds.tribonacci]: {
            id: problemIds.tribonacci,
            title: 'N-th Tribonacci Number',
            leetcodeUrl: 'https://leetcode.com/problems/n-th-tribonacci-number/',
            difficulty: Difficulty.Easy,
        },
        [problemIds.minCostClimbing]: {
            id: problemIds.minCostClimbing,
            title: 'Min Cost Climbing Stairs',
            leetcodeUrl: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
            difficulty: Difficulty.Easy,
        },
        [problemIds.houseRobber]: {
            id: problemIds.houseRobber,
            title: 'House Robber',
            leetcodeUrl: 'https://leetcode.com/problems/house-robber/',
            difficulty: Difficulty.Medium,
        },
        [problemIds.houseRobber2]: {
            id: problemIds.houseRobber2,
            title: 'House Robber II',
            leetcodeUrl: 'https://leetcode.com/problems/house-robber-ii/',
            difficulty: Difficulty.Medium,
        },
        [problemIds.decodeWays]: {
            id: problemIds.decodeWays,
            title: 'Decode Ways',
            leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
            difficulty: Difficulty.Medium,
        },
    },
    progress: {
        [problemIds.climbingStairs]: {
            problemId: problemIds.climbingStairs,
            solved: false,
            confidence: null,
            lastUpdated: new Date().toISOString(),
        },
        [problemIds.tribonacci]: {
            problemId: problemIds.tribonacci,
            solved: false,
            confidence: null,
            lastUpdated: new Date().toISOString(),
        },
        [problemIds.minCostClimbing]: {
            problemId: problemIds.minCostClimbing,
            solved: false,
            confidence: null,
            lastUpdated: new Date().toISOString(),
        },
        [problemIds.houseRobber]: {
            problemId: problemIds.houseRobber,
            solved: false,
            confidence: null,
            lastUpdated: new Date().toISOString(),
        },
        [problemIds.houseRobber2]: {
            problemId: problemIds.houseRobber2,
            solved: false,
            confidence: null,
            lastUpdated: new Date().toISOString(),
        },
        [problemIds.decodeWays]: {
            problemId: problemIds.decodeWays,
            solved: false,
            confidence: null,
            lastUpdated: new Date().toISOString(),
        },
    },
};
