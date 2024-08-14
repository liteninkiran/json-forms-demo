import { schema, uischema, data } from '../examples/enum';
import JsonFormTemplate from './JsonFormTemplate';

function Enum() {
  return (
    <JsonFormTemplate heading='Enum' schema={schema} uischema={uischema} initialData={data} />
  );
}

export default Enum;
