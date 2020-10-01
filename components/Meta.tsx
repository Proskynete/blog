import { FC } from "react";
import Head from "next/head";
import { PropsInterface } from "../models/meta.model";

const Meta: FC<PropsInterface> = (props) => {
  const { customTitle, description } = props;

  return (
    <Head>
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description}></meta>
      <title>{customTitle}</title>
    </Head>
  );
};

export default Meta;
