import React, { useState } from 'react';
import FileUploader from '~/components/FileUploader';
import NavBar from "~/components/NavBar";

const Upload = () => {
    const [ isProcessing, setIsProcessing ] = useState(false);
    const [ statusText, setStatusText ] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget.closest('form');
        if(!form) return;

        const formData = new FormData(form);

        const companyName = formData.get('company-name');
        const jobTitle = formData.get('job-title');
        const jobDescription = formData.get('job-description');

        console.log({
            companyName, jobTitle, jobDescription, file
        })
    }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <NavBar></NavBar>
        <section className="main-section">
            <div className="page-heading py-16">
                <h1>Smart feedback for your dream job</h1>
                {isProcessing ? (
                    <>
                        <h2>{statusText}</h2>
                        <img src="/images/resume-scan.pdf"  className="w-full"/>
                    </>
                ) : (
                    <h2>Drop your resume for an ATS Score and Improvement Tips</h2>
                )}
                {!isProcessing && (
                    <form onSubmit={handleSubmit} id="uploadform" className='flex flex-col gap-4 mt-8'>
                        <div className="form-div">
                            <label htmlFor="company-name">Company name</label>
                            <input type="text" name='company-name' placeholder='Company name' id='company-name'  />
                        </div>
                        <div className="form-div">
                            <label htmlFor="job-title">Job title</label>
                            <input type="text" name='job-title' placeholder='Job title' id='job-title'  />
                        </div>
                        <div className="form-div">
                            <label htmlFor="job-description">Job description</label>
                            <textarea rows={5} name='job-description' placeholder='Job description' id='job-description'  />
                        </div>

                        <div className="form-div">
                            <label htmlFor="uploader">Upload resume</label>
                            <FileUploader onFileSelect={handleFileSelect}/>
                        </div>

                        <button className="primary-button" type='submit'>
                            Analyze resume
                        </button>
                    </form>
                )}
            </div>
        </section>
    </main>
  )
}

export default Upload