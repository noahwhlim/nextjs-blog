import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
    
    return (
            <ul className="text-white p-1">
                <li className="mb-2">
                    <Link href="/" className="flex flex-row">
                    <Image src="/posts-white.svg" alt="posts" width={24} height={24} className="mr-1 flex-shrink-0"/>
                        <p className="ml-2 hidden lg:block">Posts</p>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/" className="flex flex-row">
                        <Image src="/about-white.svg" alt="about" width={24} height={24} className="mr-1"/>
                        About
                    </Link>
                </li>

                <li className="mb-2">
                    <Link href="https://www.github.com/noahwhlim" className="flex flex-row">
                        <Image src="/github-white.svg" alt="linkedin" width={24} height={24} className="mr-1"/>
                        Github
                    </Link>
                </li>

                <li className="mb-2">
                    <Link href="https://www.linkedin.com/in/noahwhlim" className="flex flex-row">
                        <Image src="/linkedin-white.svg" alt="linkedin" width={24} height={24} className="mr-1"/>
                        Linkedin
                    </Link>
                </li>
            </ul>
    )
}

export default Sidebar;