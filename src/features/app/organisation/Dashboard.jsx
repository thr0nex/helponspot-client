import React, { useContext, useState } from "react";
import FullHeightLayoutNoFooter from "../../../components/app/full-height-layout-no-footer";
import Reactions from "../../../components/app/reactions";
import OpenRequest from "../../../components/app/open-request";
import ReqProvider, { ReqContext } from "../../../context/mock-requests";
import RepositoryImpl from "../../../repository/repository";
import {
  OrgNameContext,
  OrgIdContext
} from "../../../context/organisation_context";
import { Helper } from "../../../repository/model/helper";
import { Skill } from "../../../repository/model/helprequest";

let repository = new RepositoryImpl();

export default function Dashboard() {
  const org_id = useContext(OrgIdContext);
  const org_name = useContext(OrgNameContext);
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const fetchOrgData = async () => {
      const data = await repository.getHelpRequests(org_id);
      setData(data);
    };
    fetchOrgData();
  }, []);
  return (
    <ReqProvider>
      <div className="flex flex-col w-full h-full px-8 py-4 overflow-y-auto w-full scrolling-touch">
        <div style={{ flex: 2 }}>
          <h1 className="question font-dm-sans-h1">
            Hi {org_name}, das gibt's Neues.
          </h1>
        </div>

        <div>
          <Reactions reactNum={12} />
        </div>
        {data.map(el => {
          return <OpenRequest {...el} />;
        })}
      </div>
    </ReqProvider>
  );
}
