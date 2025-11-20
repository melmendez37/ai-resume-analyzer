import { usePuterStore } from "~/lib/puter";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import NavBar from "~/components/NavBar";
import ResumeCard from "~/components/ResumeCard";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumeind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore(); 
      const navigate = useNavigate();
  
      //if user tries to access secure route and not logged in, they will be blocked at auth. after logi in, they are redirected successfully.
      useEffect(() => {
        if(!auth.isAuthenticated) navigate('auth?next=/');
      }, [auth.isAuthenticated]);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <NavBar/>
    
    <section className="main-section ">
      <div className="page-heading py-16">
        <h1>Track your applications and Resume Ratings</h1>
        <h2>Review your submissions and check AI-Powered feedback</h2>
      </div>
      {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume}/>
        ))}
      </div>
      )}
    </section>

    
  </main>;
}
