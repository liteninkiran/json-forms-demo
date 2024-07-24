import JsonFormTemplate from './JsonFormTemplate';

function Textarea() {
    return (
        <JsonFormTemplate
            heading="Textarea"
            schema={schema}
            uischema={uischema}
            initialData={data}
        />
    );
}

export default Textarea;

export const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 3,
            description: 'Please enter your name',
        },
    },
};

export const uischema = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/name',
            options: {
                multi: true,
            },
        },
    ],
};

export const data = {
    name: null,
};
