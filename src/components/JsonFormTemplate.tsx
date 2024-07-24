import {
  vanillaRenderers,
  vanillaCells,
} from '@jsonforms/vanilla-renderers';
import { useState } from 'react';
import { JsonForms } from '@jsonforms/react';

type Props = {
    heading: string;
    schema: any;
    uischema: any;
    initialData: any;
}

function JsonFormTemplate({ heading, schema, uischema, initialData}: Props) {
  const [data, setData] = useState(initialData);
  // console.log(schema, uischema, initialData);
  return (
    <>
      <h1 className='heading'>{heading}</h1>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={vanillaRenderers}
        cells={vanillaCells}
        onChange={({ data, errors }) => setData(data)}
      />
      <hr />
    </>
  );
}

export default JsonFormTemplate;
