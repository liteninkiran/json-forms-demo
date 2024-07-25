import JsonFormTemplate from './JsonFormTemplate';
import Ajv from 'ajv';
import AjvErrors from 'ajv-errors';

function Custom() {
  const ajv = new Ajv({ allErrors: true });
  AjvErrors(ajv);
  const validate = ajv.compile(schema);
  console.log(validate.errors);

  return (
    <JsonFormTemplate
      heading="Custom"
      schema={schema}
      uischema={uischema}
      initialData={initialData}
    />
  );
}

export default Custom;

const schema = {
  type: 'object',
  required: ['foo', 'bar'],
  allOf: [
    {
      properties: {
        foo: { type: 'integer', minimum: 2 },
        bar: { type: 'string', minLength: 2 },
      },
      additionalProperties: false,
    },
  ],
  errorMessage: {
    type: 'data should be an object',
    properties: {
      foo: 'data.foo should be integer >= 2',
      bar: 'data.bar should be string with length >= 2',
    },
    _: 'data should have properties "foo" and "bar" only',
  },
};

const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/foo',
    },
    {
      type: 'Control',
      scope: '#/properties/bar',
    },
  ],
};

const initialData = {};
