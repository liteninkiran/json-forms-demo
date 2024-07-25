import { multiEnum as example } from '@jsonforms/examples';
import JsonFormTemplate from './JsonFormTemplate';

const schema = example.schema;
const uischema = example.uischema;
const initialData = example.data;

function EnumMulti() {
  return (
    <JsonFormTemplate heading='Enum Multi' schema={schema} uischema={uischema} initialData={initialData} />
  );
}

export default EnumMulti;
