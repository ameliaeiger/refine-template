import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useList } from "@refinedev/core";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "inventoryDate", headerName: "Inventory Date" },
  { field: "cosisDue", headerName: "Cosis Due" },
  { field: "cosisComplete", headerName: "COSIS Complete" },
  { field: "packagingDeficiency", headerName: "Packaging Deficiency" },
  { field: "nomenclature", headerName: "Nomenclature" },
  { field: "qty", headerName: "Qty" },
  { field: "uom", headerName: "UOM" },
  { field: "fsc", headerName: "FSC" },
  { field: "niin", headerName: "NIIN" },
  { field: "partNum", headerName: "Part #" },
  { field: "serialNum", headerName: "Serial #" },
  { field: "location", headerName: "Location" },
  { field: "site", headerName: "Site" },
  { field: "rfid", headerName: "RFID" },
  { field: "propertyNum", headerName: "Property Number" },
  { field: "cageCode", headerName: "CAGE Code" },
  { field: "fedlogNum", headerName: "FedLog Number" },
  { field: "bin", headerName: "Bin" },
  { field: "stockNum", headerName: "Stock Number" },
  { field: "dpasId", headerName: "DPAS ID" },
  { field: "uic", headerName: "UIC" },
  { field: "unitPrice", headerName: "Unit Price" },
  { field: "ui", headerName: "UI" },
  { field: "totalCost", headerName: "Total Cost" },
  { field: "dateShipped", headerName: "Date Shipped" },
  { field: "dateReceived", headerName: "Date Received" },
  { field: "receivedCc", headerName: "Received CC" },
  { field: "comments", headerName: "Comments" },
  { field: "slExpDate", headerName: "SL EXP Date" },
  { field: "fedlogData", headerName: "FEDLOG Data" },
  { field: "sos", headerName: "SOS" },
  { field: "aril", headerName: "ARIL" },
  { field: "ciic", headerName: "CIIC" },
  { field: "critlCode", headerName: "CRITL Code" },
  { field: "demilCode", headerName: "DEMIL Code" },
  { field: "hmic", headerName: "HMIC" },
  { field: "scic", headerName: "SCIC" },
  { field: "scmc", headerName: "SCMC" },
  { field: "slc", headerName: "SLC" },
  { field: "src", headerName: "SRC" },
  { field: "matcat", headerName: "MATCAT_4_5" },
  { field: "exchangePrice", headerName: "Exchange Price" },
  { field: "tosFlis", headerName: "TOS FLIS" },
  { field: "tosArmy", headerName: "TOS ARMY" },
  { field: "hcc", headerName: "HCC" },
  { field: "ciicFlis", headerName: "CIIC FLIS" },
  { field: "ciicAmdf", headerName: "CIIC AMDF" },
  { field: "flisMop", headerName: "FLIS MOP" },
  { field: "armyMop", headerName: "ARMY MOP" },
  { field: "esd", headerName: "ESD" },
  { field: "verifiedCC", headerName: "Verified CC" },
];


const InventoryList = () => {
     const result = useList({
          resource: "data"
     })
     const [data, setData] = useState(false)

     useEffect(() => {
          if (result.status == "success") {
               setData(result.data.data)
          }
     },[result])

     useEffect(() => {
          data && makeList()
          data && console.log("data: ", data[0]);
     },[data])

     const makeList = () => {
          let mapTest = data.map((item) => {
               const { id, Nomenclature, Qty, UOM, FSC, NIIN, Site, Bin, UIC, UI, COMMENTS, SOS, ARIL, ARC, CIIC, HMIC, SCIC, SLC, SRC, SCMC, MATCAT_4_5, HCC, ESD} = item
               return ({
                    id,
                    "inventoryDate": item["Inventory Date"],
                    "cosisDue": item["COSIS DUE"],
                    "cosisComplete": item["COSIS COMPLETE"],
                    "packagingDeficiency": item["Packaging Deficiency"],
                    "nomenclature": Nomenclature,
                    "qty": Qty,
                    "uom": UOM,
                    "fsc": FSC,
                    "niin": NIIN,
                    "partNum": item["Part No"],
                    serialNum: item["SERIAL #"],
                    location: item["Location "],
                    site: Site,
                    rfid: item["RFID Number"],
                    propertyNum: item["Property Number"],
                    cageCode: item["CAGE CODE"],
                    fedlogNum: item["FedLog Number"],
                    bin: Bin,
                    stockNum: item["stock number"],
                    dpasId: item["DPAS ID"],
                    uic: UIC,
                    unitPrice: item["Unit Price"],
                    ui: UI,
                    totalCost: item["Total Cost"],
                    dateShipped: item["Date Shipped"],
                    dateReceived: item["Date Received"],
                    receivedCc: item["Received CC"],
                    comments: COMMENTS,
                    slExpDate: item["SL EXP DATE"],
                    fedlogData: item["FEDLOG DATA"],
                    sos: SOS,
                    aril: ARIL,
                    arc: ARC,
                    ciic: CIIC,
                    critlCode: item["CRITL CODE"],
                    demilCode: item["DEMIL CODE"],
                    hmic: HMIC,
                    scic: SCIC,
                    scmc: SCMC,
                    slc: SLC,
                    src: SRC,
                    matcat: MATCAT_4_5,
                    exchangePrice: item["EXCHANGE PRICE"],
                    tosFlis: item["TOS FLIS"],
                    tosArmy: item["TOS ARMY"],
                    hcc: HCC,
                    ciicFlis: item["CIIC FLIS"],
                    ciicAmdf: item["CIIC AMDF"],
                    flisMop: item["FLIS MOP"],
                    armyMop: item["ARMY MOP"],
                    esd: ESD,
                    verifiedCC: item["Verified CC"]






               })
          })

          return mapTest.map((item) => {
               return (
                    <DataGrid columns={columns} rows={mapTest} columnVisibilityModel={{
                         id: false
                    }} />
               )
          })
     }

 


     if (data) {
          return (
               <>
               {makeList()}
               </>
          )
     } else {
          return <>hi</>
}
}

export default InventoryList


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
