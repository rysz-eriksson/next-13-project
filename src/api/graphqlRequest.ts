import { type TypedDocumentString } from "@/gql/graphql";

type GraphQlResponse<T> =
| {
    data: T;
    errors?: undefined;
}
| {
    data?: undefined;
    errors: { message: string }[];
};

export const executeGraphql = async <TResult, TVariables>(query: TypedDocumentString<TResult, TVariables>, 
    ...[variables]: TVariables extends Record<string, never>
    ? []
    : [TVariables]): Promise<TResult> => {
    if (!process.env.GRAPHQL_URL) {
        throw new Error("GRAPHQL_URL is not defined");
    }
    const res = await fetch(process.env.GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });
    
        const graphqlResponse = (await res.json()) as GraphQlResponse<TResult>;
        if (graphqlResponse.errors) {
            console.dir(graphqlResponse.errors)
            console.log("query", query);
            throw new Error(`GraphQl Error`, {
                cause: graphqlResponse.errors,
            });
        }

        return graphqlResponse.data;
}