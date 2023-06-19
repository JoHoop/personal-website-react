import React from 'react';
import ResumeData from '../settings/resume.json';

export default function Resume() {
  const {
    basics,
    work,
    volunteer,
    education,
    awards,
    publications,
    skills,
    languages,
    interests,
    references
  } = ResumeData;

  return (
    <div>
      <h1>{basics.name}</h1>
      <h2>{basics.label}</h2>
      <p>Email: {basics.email}</p>
      <p>Phone: {basics.phone}</p>
      <h3>Work Experience</h3>
      {work.map((job, index) => (
        <div key={index}>
          <h4>{job.position} at {job.company}</h4>
          <p>{job.startDate} - {job.endDate}</p>
          <p>{job.summary}</p>
        </div>
      ))}
      <h3>Volunteer Experience</h3>
      {volunteer.map((vol, index) => (
        <div key={index}>
          <h4>{vol.position} at {vol.organization}</h4>
          <p>{vol.startDate} - {vol.endDate}</p>
          <p>{vol.summary}</p>
        </div>
      ))}
      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.studyType} in {edu.area} at {edu.institution}</h4>
          <p>{edu.startDate} - {edu.endDate}</p>
        </div>
      ))}
      <h3>Awards</h3>
      {awards.map((award, index) => (
        <div key={index}>
          <h4>{award.title}</h4>
          <p>By {award.awarder} on {award.date}</p>
        </div>
      ))}
      <h3>Publications</h3>
      {publications.map((pub, index) => (
        <div key={index}>
          <h4>{pub.name}</h4>
          <p>Published by {pub.publisher} on {pub.releaseDate}</p>
        </div>
      ))}
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <h4>{skill.name}</h4>
          <p>Level: {skill.level}</p>
          <p>Keywords: {skill.keywords.join(', ')}</p>
        </div>
      ))}
      <h3>Languages</h3>
      {languages.map((lang, index) => (
        <div key={index}>
          <h4>{lang.language}</h4>
          <p>Fluency: {lang.fluency}</p>
        </div>
      ))}
      <h3>Interests</h3>
      {interests.map((interest, index) => (
        <div key={index}>
          <h4>{interest.name}</h4>
          <p>Keywords: {interest.keywords.join(', ')}</p>
        </div>
      ))}
      <h3>References</h3>
      {references.map((ref, index) => (
        <div key={index}>
          <h4>{ref.name}</h4>
          <p>{ref.reference}</p>
        </div>
      ))}
    </div>
  );
}
