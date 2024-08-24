import MaxWidthWrapper from "../../components/MaxWidthWrapper.jsx";
import { resourcesLinks, platformLinks, communityLinks } from "../../constants";

const footerListsMap = {
  Resoutces: resourcesLinks,
  Platform: platformLinks,
  Community: communityLinks,
};

const Footer = () => {
  const footerListsNames = Object.keys(footerListsMap);

  return (
    <MaxWidthWrapper className="border-t border-neutral-700">
      <footer className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
        {footerListsNames.map((footerListName, index) => (
          <div>
            <p className="mb-4">{footerListName}</p>
            <ul className="flex flex-col gap-2">
              {footerListsMap[footerListName].map((link, index) => (
                <li key={index}>
                  <a
                    className="opacity-50 hover:opacity-100"
                    href={`#${link.href}`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </MaxWidthWrapper>
  );
};
export default Footer;
