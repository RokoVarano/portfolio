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
      <h1>{`${job.name}, ${job.title}`}</h1>
      <p>{`${job.phone}, ${job.email}`}</p>
    </li>
  );
  return (
    <>
      <ul className="jobs-container">
        { jobs.map((job: Job) => jobDisplay(job)) }
      </ul>
      <ul className="recs-container">
        <p className="position">{currentJob?.description}</p>
        { currentJob?.recommendations.map((rec: Job) => recommendationDisplay(rec))}
      </ul>
    </>
  );
};

export default Experience;
