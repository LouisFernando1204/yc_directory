"use client"

import Link from "next/link"
import { Button } from "./ui/button"

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement
        if (form) {
            form.reset()
        }
    }

    return (
        <Button
            asChild
            onClick={reset}
            type="reset"
        >
            <Link href="/" className="search-btn text-white">
                X
            </Link>
        </Button>
    )
}

export default SearchFormReset