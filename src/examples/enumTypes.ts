export type Schema = {
    type: string;
    properties: {
        plainEnum: {
            type: string;
            enum: string[];
        };
        plainEnumSet: {
            type: string;
            enum: string[];
        };
        enumWithError: {
            type: string;
            enum: string[];
        };
        oneOfEnum: {
            type: string;
            oneOf: {
                const: string;
                title: string;
            }[];
        };
        oneOfEnumSet: {
            type: string;
            oneOf: {
                const: string;
                title: string;
            }[];
        };
        oneOfEnumWithError: {
            type: string;
            oneOf: {
                const: string;
                title: string;
            }[];
        };
        constEnum: {
            const: string;
        };
    };
};
export type UiSchema = {
    type: string;
    elements: {
        type: string;
        label: string;
        elements: ({
            type: string;
            scope: string;
            options?: undefined;
        } | {
            type: string;
            scope: string;
            options: {
                autocomplete: boolean;
            };
        })[];
    }[];
};
export type Data = {
    plainEnumSet: string;
    enumWithError: string;
    oneOfEnumSet: string;
    oneOfEnumWithError: string;
};
