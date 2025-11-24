export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      matchScore: 82,
      atsCompatibility: 90,
      missingKeywords: [],
      formattingIssues: [],
      strengths: [
        "Strong dual expertise in UI/UX and frontend development",
        "Relevant experience with React.js, Next.js, and Tailwind CSS"
      ],
      weaknesses: [],
      suggestions: []
    },
  },
  {
    id: "2",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      matchScore: 82,
      atsCompatibility: 90,
      missingKeywords: [],
      formattingIssues: [],
      strengths: [
        "Strong dual expertise in UI/UX and frontend development",
        "Relevant experience with React.js, Next.js, and Tailwind CSS"
      ],
      weaknesses: [],
      suggestions: []
    },
  },
  {
    id: "3",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      matchScore: 82,
      atsCompatibility: 90,
      missingKeywords: [],
      formattingIssues: [],
      strengths: [
        "Strong dual expertise in UI/UX and frontend development",
        "Relevant experience with React.js, Next.js, and Tailwind CSS"
      ],
      weaknesses: [],
      suggestions: []
    },
  },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  
  IMPORTANT: You MUST return ONLY a valid JSON object that EXACTLY matches this structure (do not deviate):
  ${AIResponseFormat}
  
  Your response must be ONLY the JSON object, with NO other text, NO explanations, NO markdown formatting, NO backticks.
  The JSON must be parseable as valid JSON.
  Return the analysis as a single line or formatted JSON, but ONLY JSON - nothing else.`;