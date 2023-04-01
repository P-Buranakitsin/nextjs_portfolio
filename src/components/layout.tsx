import Navbar from './navbar'
import type { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}