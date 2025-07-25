import { auth, signIn, signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BadgePlusIcon, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    <Image priority src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="max-sm:hidden">Create</span>
                                <BadgePlusIcon className="size-6 sm:hidden" />
                            </Link>

                            <form action={async () => {
                                'use server'
                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type="submit">
                                    <span className="max-sm:hidden">Logout</span>
                                    <LogOut className="size-6 sm:hidden text-red-600" />
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <Avatar className="size-10">
                                    <AvatarImage
                                        src={session?.user?.image || ""}
                                        alt={session?.user?.name || ""}
                                    />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            'use server'
                            await signIn("github")
                        }}>
                            <button type="submit">
                                Sign in
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar