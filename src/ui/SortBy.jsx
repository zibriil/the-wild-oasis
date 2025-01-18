import Select from './Select';
import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
  const [searchParams, setSearhParams] = useSearchParams();

  function handleChange(event) {
    searchParams.set('sortBy', event.target.value);
    setSearhParams(searchParams);
  }

  return (
    <div>
      <Select options={options} type="white" onChange={handleChange} />
    </div>
  );
}

export default SortBy;
