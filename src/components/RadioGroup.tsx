import { radioGroupExample as example } from '@jsonforms/examples';
import JsonFormTemplate from './JsonFormTemplate';

const schema = example.schema;
const uischema = example.uischema;
const initialData = example.data;

function Person() {
  return (
    <JsonFormTemplate heading='Radio Group' schema={schema} uischema={uischema} initialData={initialData} />
  );
}

export default Person;
