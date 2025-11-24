interface Job {
  title: string;
  description: string;
  location: string;
  requiredSkills: string[];
}

interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback;
}

interface Feedback {
  overallScore: number;
  matchScore: number;
  atsCompatibility: number;
  missingKeywords: string[];
  formattingIssues: string[];
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}