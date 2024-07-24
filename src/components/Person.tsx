import { schema, uischema, data } from '../examples/person';
import JsonFormTemplate from './JsonFormTemplate';

function Person() {
  return (
    <JsonFormTemplate heading='Person' schema={schema} uischema={uischema} initialData={data} />
  );
}

export default Person;
