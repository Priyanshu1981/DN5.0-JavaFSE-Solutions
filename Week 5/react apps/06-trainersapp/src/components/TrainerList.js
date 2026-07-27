import React from 'react';
import { Link } from 'react-router-dom';
import Trainer from '../trainer';

const trainers = [
  new Trainer(101, 'Ananya Rao', 'ananya.rao@cognizant.com', '9876543210', 'Java Full Stack', ['Spring Boot', 'React']),
  new Trainer(102, 'Vikram Iyer', 'vikram.iyer@cognizant.com', '9876500011', 'Frontend', ['React', 'Angular']),
  new Trainer(103, 'Sneha Kulkarni', 'sneha.kulkarni@cognizant.com', '9876500022', 'DevOps', ['Docker', 'CI/CD'])
];

function TrainerList() {
  return (
    <div>
      <h2>Trainer List</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.TrainerId}>
            <Link to={`/trainers/${trainer.TrainerId}`}>{trainer.Name}</Link> — {trainer.Technology}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { trainers };
export default TrainerList;
