import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Context from "../Context/context";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Context>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </Context>
  );
};

export default api.withTRPC(MyApp);
