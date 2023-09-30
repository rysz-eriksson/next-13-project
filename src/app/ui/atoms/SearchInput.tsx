import { type FormEvent } from "react";

type SearchInputProps = {
    value: string;
    onChangeHandler: (value: string) => void; 
    onSubmitHandler: (value: FormEvent<HTMLFormElement>) => void;
}

export const SearchInput = (props: SearchInputProps) => {
    const { value, onChangeHandler, onSubmitHandler } = props;

    return (
        <form onSubmit={onSubmitHandler}>
            <input 
                name="searchInput" 
                onChange={(event) => onChangeHandler(event.target.value)}
                value={value} 
                type="text" 
                placeholder="Czego szukasz?" 
                className="w-8"
            ></input>
            <button type="submit">Szukaj</button>
        </form>
    )
}