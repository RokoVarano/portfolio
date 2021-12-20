import React, { FC, useState } from 'react';
import Popup from 'reactjs-popup';
import { Job } from '../Utils';

interface Props {
  jobs: Array<Job>,
}

const ExperienceMobile:FC<Props> = (props: Props) => {
  const { jobs } = props;

  const [currentJob, setCurrentJob] = useState<Job>();

  const recommendationDisplay = (job: Job) => (
    <div className="rec-container">
      <h1>{`${job.name}, ${job.title}`}</h1>
      <p>{`${job.phone}, ${job.email}`}</p>
    </div>
  );

  const jobDisplay = (job: Job) => (
    <Popup
      trigger={(
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
      )}
      modal
      nested
    >
      <ul className="recs-container">
        <p className="position">{currentJob?.description}</p>
        { currentJob?.recommendations.map((rec: Job) => recommendationDisplay(rec))}
      </ul>
    </Popup>
  );

  return (
    <ul className="jobs-container mobile">
      { jobs.map((job: Job) => jobDisplay(job)) }
    </ul>
  );
};

export default ExperienceMobile;
