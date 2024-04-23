import { mapBiomToBacteriaRows } from 'utils/biomMapper';
import biomObject from 'data/biom.json';

export const App = () => {
  const data = mapBiomToBacteriaRows(biomObject);

  console.log(data);

  return <div>Biological observation</div>;
};
