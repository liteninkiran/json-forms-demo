import { enumExample as example } from '@jsonforms/examples';
import JsonFormTemplate from './JsonFormTemplate';

const schema = example.schema;
const uischema = example.uischema;
const initialData = example.data;

function Enum() {
  return (
    <JsonFormTemplate heading='Enum' schema={schema} uischema={uischema} initialData={initialData} />
  );
}

export default Enum;