import { readonly as example } from '@jsonforms/examples';
import JsonFormTemplate from './JsonFormTemplate';

const schema = example.schema;
const uischema = example.uischema;
const initialData = example.data;

function ReadOnly() {
  return (
    <JsonFormTemplate heading='Age' schema={schema} uischema={uischema} initialData={initialData} />
  );
}

export default ReadOnly;
