import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import { setTimeout } from 'timers';
import { Job } from '../Utils';

interface Props {
  jobs: Array<Job>
}

const Experience:FC<Props> = (props: Props) => {
  const { jobs } = props;
  const recsRef = useRef<HTMLUListElement>(null);

  const [currentJob, setCurrentJob] = useState<Job>();

  useEffect(() => {
    recsRef.current?.classList.add('turnoff');

    setTimeout(() => recsRef.current?.classList.remove('turnoff'), 300);
    setTimeout(() => recsRef.current?.classList.add('turnoff'), 650);
    setTimeout(() => recsRef.current?.classList.remove('turnoff'), 780);
  }, [currentJob]);

  const highlight = {
    boxShadow: '0 0 3rem red, 0 0 2rem red',
    borderColor: '0.2rem red solid',
  };

  const h1highlight = {
    textShadow: '0 0 3rem red, 0 0 1rem red',
    color: 'red',
  };

  const jobDisplay = (job: Job) => (
    <li className="job-container">
      <button
        style={currentJob === job ? highlight : {}}
        type="button"
        onClick={() => {
          setCurrentJob(job);
        }}
      >
        <h1 style={currentJob === job ? h1highlight : {}}>{job.title}</h1>
        <h2 style={currentJob === job ? h1highlight : {}}>{job.company}</h2>
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
      <ul className="jobs-container desktop">
        { jobs.map((job: Job) => jobDisplay(job)) }
      </ul>
      <ul className="recs-container desktop" ref={recsRef}>
        <p className="position">{currentJob?.description}</p>
        { currentJob?.recommendations.map((rec: Job) => recommendationDisplay(rec))}
      </ul>
    </>
  );
};

export default Experience;
