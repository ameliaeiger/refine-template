import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useList } from "@refinedev/core";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const DashboardShow = () => {
     const date = dayjs().format("MM-DD-YYYY")

     const getHeader = () => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
     }

     const getGreeting = () => {
          return (
               <div>
                    {`Hello! Today is ${date}.`}
               </div>
          )
     }

     return (
          <>
          {getGreeting()}
          </>
     )
}

export default DashboardShow


export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (!session) {
    return {
      props: {
        ...translateProps,
      },
      redirect: {
        destination: `/login?to=${encodeURIComponent("/inventory")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};
