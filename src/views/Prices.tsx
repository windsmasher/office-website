import React from 'react';
import { Table } from 'react-bootstrap';
import { Config } from '../../config/config';

const Prices: React.FC = () => {
  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Sesja psychoterapii</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Indywidualna</td>
            <td>{Config.Price.Individual} PLN</td>
          </tr>
          <tr>
            <td>Rodzinna / Małżeńska / Par</td>
            <td>{Config.Price.Family} PLN</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Prices;
