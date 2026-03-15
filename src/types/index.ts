export enum Difficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard',
}

export enum Confidence {
    Low = 'low',
    Medium = 'medium',
    High = 'high',
}

export enum TopicName {
    Arrays = 'Arrays',
    Strings = 'Strings',
    HashMaps = 'Hash Maps',
    TwoPointers = 'Two Pointers',
    SlidingWindow = 'Sliding Window',
    Stack = 'Stack',
    Queue = 'Queue',
    LinkedLists = 'Linked Lists',
    BinarySearch = 'Binary Search',
    Trees = 'Trees',
    BinarySearchTrees = 'Binary Search Trees',
    HeapPriorityQueue = 'Heap / Priority Queue',
    Graphs = 'Graphs',
    DFS = 'DFS',
    BFS = 'BFS',
    Backtracking = 'Backtracking',
    DynamicProgramming = 'Dynamic Programming',
    Greedy = 'Greedy',
    BitManipulation = 'Bit Manipulation',
    Math = 'Math',
}

export interface Problem {
    id: string;
    title: string;
    leetcodeUrl: string;
    difficulty: Difficulty;
}

export interface ProblemProgress {
    problemId: string;
    solved: boolean;
    confidence: Confidence | null;
    lastUpdated: string;
}

export interface PatternGroup {
    id: string;
    name: string;
    problemIds: string[];
}

export interface Topic {
    id: string;
    name: TopicName;
    groups: PatternGroup[];
}

export interface AppData {
    version: number;
    topics: Topic[];
    problems: Record<string, Problem>;
    progress: Record<string, ProblemProgress>;
}
