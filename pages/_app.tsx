import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider
      locale={pageProps.locale || "en-US"}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
