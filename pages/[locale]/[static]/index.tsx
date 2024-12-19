import { useLocale } from "next-intl";

export default function StaticPage() {
  const locale = useLocale();

  return (
    <div>
      This is the static page{" "}
      <div>
        <b>Locale:</b> {locale}
      </div>
    </div>
  );
}
