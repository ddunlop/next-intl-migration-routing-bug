import { Link } from "@/i18n/routing";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export const getStaticPaths = () => {
  const paths = ["en-US", "es"].map((locale) => {
    return {
      params: { locale },
    };
  });

  return { paths, fallback: false };
};

interface Props {
  locale: string;
}

interface PageParams extends ParsedUrlQuery {
  locale: string;
}

export const getStaticProps: GetStaticProps<Props, PageParams> = async (
  context
) => {
  const locale = context.params?.locale ?? "en-US";

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
