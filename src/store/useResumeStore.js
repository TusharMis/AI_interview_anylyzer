import { create } from 'zustand';

export const useResumeStore = create((set) => ({
  activeResume: {
    fileName: 'Alex_Rivera_Senior_FullStack_Resume.pdf',
    uploadDate: '2026-08-05',
    parsedSkills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS'],
    summary: 'Senior Full Stack Engineer with 6+ years experience engineering microservices, high-throughput cloud architectures, and interactive WebGL/React applications.',
    experienceYears: 6.5,
    matchScore: 94
  },
  isUploading: false,
  uploadProgress: 0,

  setUploading: (isUploading, progress = 0) => set({ isUploading, uploadProgress: progress }),
  setResumeData: (data) => set({ activeResume: data, isUploading: false, uploadProgress: 100 })
}));
