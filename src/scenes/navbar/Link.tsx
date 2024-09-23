import { SelectedPage } from "@/share/type";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:  string; 
    selectedPage:  SelectedPage; 
    setSelectedPage: (valie: SelectedPage) => void;

}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            tansition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link
