import React, { FC, useState } from 'react';
import { Job } from '../Utils';

interface Props {
  jobs: Array<Job>
}

const Experience:FC<Props> = (props: Props) => {
  const { jobs } = props;

  const [currentJob, setCurrentJob] = useState<Job>();

  const jobDisplay = (job: Job) => (
    <li className="job-container">
      <button
        type="button"
        onClick={() => {
          setCurrentJob(job);
        }}
      >
        <h1>{job.title}</h1>
        <h2>{job.company}</h2>
      </button>
    </li>
  );

  const recommendationDisplay = (job: Job) => (
    <li className="rec-container">
      <h1>{job.name}</h1>
      <h2>{job.title}</h2>
      <h3>{job.phone}</h3>
      <h3>{job.email}</h3>
    </li>
  );
  return (
    <>
      <ul className="jobs-container">
        { jobs.map((job: Job) => jobDisplay(job)) }
      </ul>
      <ul className="recs-container">
        <p>{currentJob?.description}</p>
        { currentJob?.recommendations.map((rec: Job) => recommendationDisplay(rec))}
      </ul>
    </>
  );
};

export default Experience;
