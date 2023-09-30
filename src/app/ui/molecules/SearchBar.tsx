'use client';

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchInput } from "../atoms/SearchInput"

export const SearchBar = () => {
    const router = useRouter()
    const [searchValue, setSearchValue] = useState<string>('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        router.push(`/search?query=${searchValue}`)
    }

    return (
        <>
            <SearchInput 
                value={searchValue}
                onChangeHandler={setSearchValue}  
                onSubmitHandler={handleSubmit}
            />
        </>
    )
}