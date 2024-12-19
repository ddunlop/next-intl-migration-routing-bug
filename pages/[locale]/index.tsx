import { Link } from "@/i18n/routing";
import { NextPageContext } from "next";

export const getStaticPaths = () => {
  const paths = ["en-US", "es"].map((locale) => {
    return {
      params: { locale },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: NextPageContext) => {
  const {
    params: { locale },
  } = context;

  return { props: { locale } };
};

export default function IndexPage({ locale }: { locale: string }) {
  return (
    <div>
      This is the index index page in the pages router
      <div>
        <b>Locale:</b> {locale}
      </div>
      <ul>
        <li>
          <Link href="/dynamic">Dynamic Page</Link>
        </li>
      </ul>
    </div>
  );
}
