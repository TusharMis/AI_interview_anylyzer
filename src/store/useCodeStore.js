import { create } from 'zustand';

const defaultPythonCode = `def two_sum(nums, target):
    # Hash map to store index of complements
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test execution
print(two_sum([2, 7, 11, 15], 9))
`;

const defaultJSCode = `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
`;

export const useCodeStore = create((set) => ({
  language: 'python', // 'python' | 'javascript' | 'typescript' | 'cpp'
  code: defaultPythonCode,
  isExecuting: false,
  terminalOutput: null,
  executionResult: null,

  setLanguage: (lang) =>
    set({
      language: lang,
      code: lang === 'python' ? defaultPythonCode : defaultJSCode
    }),
  setCode: (newCode) => set({ code: newCode }),
  setExecuting: (executing) => set({ isExecuting: executing }),
  setExecutionResult: (res) =>
    set({
      executionResult: res,
      terminalOutput: res?.ai_feedback || 'Code executed successfully.',
      isExecuting: false
    })
}));
