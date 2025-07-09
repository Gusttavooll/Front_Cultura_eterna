import Link from "next/dist/client/link";
import "./index.css";

export interface NavItemProps 
{
    url: string;
    label: string;
    isActive?: boolean;
}
export default function NavItem(props: NavItemProps)
{
    return (
        <li className="nav-item">
            <Link href={props.url} className={`nav-link ${props.isActive ? "active" : ''}`}>
                {props.label}
            </Link>
        </li>
    )
}